(function() {
  'use strict';
  
  angular.module('iui.loadingIndicator')
    .directive('iuiLoadingLabel', ['$compile', 
    function($compile) {
      let directive = {
        restrict: 'A',
        controller: LoadingLabelController,
        controllerAs: 'loadingLabel',
        scope: {
          iuiLoadingLabel: '@',
          promise: '='
        },
        link: function(scope, element, attrs) {
          
          var currentMessage = angular.element('<span>' + element.text() + '</span>');
          var loadingMessage = angular.element('<span>'+ scope.iuiLoadingLabel + '</span>');
          scope.count = 1;
          
          var loadingLabel = function(newValue, oldValue) {
            var el;
            if(newValue) {
              el = $compile(loadingMessage)(scope);
              element.empty();
              element.append(el);
              console.log('loading');
            } else {
              el = $compile(currentMessage)(scope);
              element.empty();
              element.append(el);
              console.log('not loading');
            }
          };
          
          scope.$watch('promise', loadingLabel);
          
        }
      };
      return directive;    
    }]);
  

  function LoadingLabelController() {
    // Define Variables up top
    let vm = this;
    
  }



})();










/*
            
            */