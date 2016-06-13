(function() {
  'use strict';

  angular.module('iui.loadingIndicator')
    .directive('iuiLoadingLabel', iuiLoadingLabel);

  function iuiLoadingLabel() {
    let directive = {
      restrict: 'A',
      controller: LoadingLabelController,
      controllerAs: 'loadingLabel',
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
    vm.options = scope.iuiLoadingLabel;
    vm.currentMessage = document.getElementById('loading-button').innerHTML;
    
    vm.activateLabel = function() {
      console.log(vm.currentMessage);
    };
    
  }



})();