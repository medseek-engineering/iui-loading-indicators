(function(module) {
try {
  module = angular.module('iui.basicTemplates');
} catch (e) {
  module = angular.module('iui.basicTemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/$iui-basic/iui-basic/iui-basic.html',
    '<section>\n' +
    '  {{basic.hello}} {{basic.name}}\n' +
    '</section>');
}]);
})();
