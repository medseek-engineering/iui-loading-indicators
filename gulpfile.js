(function() {
  'use strict';

  var gulp = require('gulp');
  var gulpConcat = require('gulp-concat');
  var minjs = require('gulp-uglify');
  var babel = require('gulp-babel');
  var minifyCSS = require('gulp-minify-css');
  var compass = require('gulp-compass');
  var karma = require('karma').server;
  var jshint = require('gulp-jshint');
  var browserSync = require('browser-sync').create();
  var ngHtml2Js = require('gulp-ng-html2js');
  var fs = require('fs');
  var path = require('path');
  var packageJson = JSON.parse(fs.readFileSync('./package.json'));
  var rename = require('gulp-rename');

  // Defining Files

  var environment = 'production';

  var additionalLintFiles = [
    './gulpfile.js',
    './'+packageJson.main
  ];

  var allLintFiles = packageJson.buildSettings.appFiles.jsFiles.concat(additionalLintFiles);

  var compassImportPaths = packageJson.buildSettings.styleModules.map(function(styleModule) {
    return path.join(path.dirname(require.resolve(styleModule)),'src');
  });

  gulp.task('lint', function () {
    return gulp.src(allLintFiles, {base: packageJson.buildSettings.base})
      .pipe(jshint('./config/.jshintrc'))
      .pipe(jshint.reporter('jshint-stylish'))
      .pipe(jshint.reporter('fail'));
  });

  gulp.task('test', ['lint'], function (done) {
    karma.start({
      configFile: __dirname + '/karma.conf.js',
      singleRun: true
    }, done);
  });

  gulp.task('testContinuous', ['lint'], function (done) {
    karma.start({
      configFile: __dirname + '/karma.conf.js',
      singleRun: false
    }, done);
  });

  gulp.task('createTemplates', function(cb){
    gulp.src(packageJson.buildSettings.appFiles.templateFiles)
      .pipe(ngHtml2Js({
        base: packageJson.buildSettings.base,
        moduleName: packageJson.buildSettings.createTemplates.moduleName,
        prefix: packageJson.buildSettings.createTemplates.prefix
      }))
      .pipe(gulpConcat(packageJson.buildSettings.createTemplates.templateFile))
      .pipe(gulp.dest(packageJson.buildSettings.destination.js))
      .on('end', cb);
  });

  gulp.task('combineFiles', ['createTemplates'], function(){
    // combine and minify JS

    var jsFilesCombined = [].concat(packageJson.buildSettings.appFiles.jsFiles);

    jsFilesCombined.push(packageJson.buildSettings.destination.js +
                         '/'+packageJson.buildSettings.createTemplates.templateFile);
    jsFilesCombined.push(packageJson.buildSettings.combineFiles.ignore);
    gulp.src(jsFilesCombined, {base: packageJson.buildSettings.base})
      .pipe(babel({
        presets: ['es2015']
      }))
      .pipe(gulpConcat(packageJson.buildSettings.destination.jsFile))
      .pipe(gulp.dest(packageJson.buildSettings.destination.js))
      .pipe(rename(packageJson.buildSettings.destination.jsFileMin))
      .pipe(minjs({mangle: false}))
      .pipe(gulp.dest(packageJson.buildSettings.destination.js))
      .pipe(browserSync.stream());
    browserSync.reload();
  });

  gulp.task('compileStyle', function(){
    gulp.src(packageJson.buildSettings.appFiles.styles)
      .pipe(compass({
        require: ['sass-globbing', 'bootstrap-sass'].concat(packageJson.buildSettings.compass.require),
        project: __dirname,
        sass: packageJson.buildSettings.compass.sass,
        css: packageJson.buildSettings.compass.css,
        time: true,
        sourcemap: environment === 'development',
        /* jshint ignore:start */
        import_path: compassImportPaths
        /* jshint ignore:end */
      }))
      .on('error', function(error) {
        console.log(error);
        this.emit('end');
      })
      .pipe(minifyCSS())
      .pipe(gulp.dest(packageJson.buildSettings.destination.css))
      .pipe(browserSync.stream());
  });

  gulp.task('server', ['lint', 'test', 'compileStyle', 'createTemplates', 'combineFiles'], function() {
    environment = 'development';
    browserSync.init({
        server: {
          baseDir: './'
        }
    });
    gulp.watch(allLintFiles, ['lint', 'combineFiles']);
    gulp.watch(packageJson.buildSettings.appFiles.styles, ['compileStyle']);
    gulp.watch(packageJson.buildSettings.appFiles.htmlFiles, ['createTemplates', 'combineFiles']);
  });

  gulp.task('build', ['lint', 'test', 'createTemplates', 'combineFiles', 'compileStyle']);

  gulp.task('publish', ['lint', 'test', 'createTemplates', 'combineFiles', 'compileStyle']);

  gulp.task('default', ['server']);

})();