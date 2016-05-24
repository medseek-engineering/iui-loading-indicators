module.exports = function (config) {
  'use strict';
  config.set({
    basePath: '',

    port: 9267,

    runnerPort: 9100,

    colors: true,

    autoWatch: true,

    logLevel: config.LOG_INFO,

    browsers: ['PhantomJS'],

    captureTimeout: 60000,

    browserDisconnectTolerance: 0,

    browserNoActivityTimeout: 60000,

    singleRun: true,

    plugins: [
      'karma-jasmine',
      'karma-phantomjs-launcher',
      'karma-coverage',
      'karma-babel-preprocessor',
      'karma-ng-html2js-preprocessor',
      'karma-spec-reporter'
    ],

    coverageReporter: {
      type: 'html',
      dir: 'coverage/'
    },

    htmlReporter: {
      outputDir: 'karma_html',
      templatePath: __dirname + '/node_modules/karma-html-reporter/jasmine_template.html'
    },

    files: [
      // app core dependencies
      'node_modules/jquery/dist/jquery.js',
      'test/test-helper.js',
      'node_modules/babel-polyfill/dist/polyfill.js',
      'node_modules/angular/angular.min.js',
      'node_modules/angular-mocks/angular-mocks.js',

      // app module dependencies
      'lib/src/**/*.js',

      //directive templates
      'lib/src/**/*.html',
      'lib/src/**/*.svg',
      // test scripts
      'test/**/*.test.js'
    ],

    reporters: ['coverage', 'progress', 'html', 'spec'],

    preprocessors: {
      'lib/src/**/*.js' : ['babel'],
      'test/**/*.test.js' : ['babel'],
      'lib/src/**/*.html': ['ng-html2js'],
      'lib/src/**/*.svg': ['ng-html2js']
    },

    ngHtml2JsPreprocessor: {
      // immitates ui-core
      prependPrefix: '/$iui-basic',
      stripPrefix: 'lib/src',
      moduleName: 'templates'
    },

    babelPreprocessor: {
      options: {
        presets: ['es2015'],
        sourceMap: 'inline'
      },
      filename: function (file) {
        return file.originalPath.replace(/\.js$/, '.es5.js');
      },
      sourceFileName: function (file) {
        return file.originalPath;
      }
    },

    frameworks: ['jasmine']
  });
};