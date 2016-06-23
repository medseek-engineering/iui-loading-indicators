(function() {
  'use strict';
  
  angular.module('iui.loadingIndicator')
    .directive('iuiLoadingLabel', ['$compile', '$q',
    function($compile, $q) {
      let directive = {
        restrict: 'A',
        controller: LoadingLabelController,
        controllerAs: 'loadingLabel',
        scope: {
          iuiLoadingLabel: '@',
          promise: '='
        },
        link: function(scope, element, attrs) {
          
          var currentMessage = '<span>' + element.text() + '</span>';
          var loadingMessage = '<span>'+ scope.iuiLoadingLabel + '</span>';
          
          var loadingLabel = function(newValue, oldValue) {
            var el;
            if(newValue) {
              element.empty();
              el = $compile(loadingMessage)(scope);
              element.append(el);
            } else {
              element.empty();
              el = $compile(currentMessage)(scope);
              element.append(el);
            }
            
            //this resets the promise after it is finished
            $q.when(scope.promise).then(function() {
              scope.promise = null;
            });
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