(function() {
  'use strict';

  // Follow the Angular Style Guide: https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md

  angular.module('iui.loadingIndicator')
    .directive('iuiLoadingLabel', iuiLoadingLabel);

  function iuiLoadingLabel() {
    // Babel is preprocessing JS, so we can use ES2015 features https://babeljs.io/docs/learn-es2015/
    let directive = {
      restrict: 'A',
      // templateUrl: '/$iui-loading-indicator/iui-loading-label/iui-loading-label.html',
      // Controller names must be capitalized because they are constructors
      controller: LoadingLabelController,
      controllerAs: 'loadingLabel',
      // bindToController in directive syntax is only available in Ang 1.3+
      scope: {
        iuiLoadingLabel: '=',
        iuiLoadingLabelOptions: '='
      }
    };
    return directive;
  }

  LoadingLabelController.$inject = ['_cgBusyTrackerFactory', '$scope'];

  function LoadingLabelController(_cgBusyTrackerFactory, scope) {
    // Define Variables up top
    let vm = this;
    vm.tracker = _cgBusyTrackerFactory();
    vm.promise = scope.iuiLoadingLabel;
    vm.options = scope.iuiLoadingLabelOptions;
    vm.currentMessage = document.getElementById('loading-button').innerHTML;
    
    console.log(vm.currentMessage);
    
    scope.$watch(vm.promise,function(options){
      
      if (!options) {
        options = {promise:null};
      }
      
    });
    
  }


})();