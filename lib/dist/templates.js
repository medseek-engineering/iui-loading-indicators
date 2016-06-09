(function(module) {
try {
  module = angular.module('iui.loadingIndicator');
} catch (e) {
  module = angular.module('iui.loadingIndicator', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/$iui-loading-indicator/iui-loading-label/iui-loading-label.html',
    '<section>\n' +
    '  {{loadingLabel.iuiLoadingLabel}}\n' +
    '</section>');
}]);
})();
