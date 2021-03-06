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
          promise: '=',
          disableDuringLoad: '='
        },
        link: function(scope, element, attrs) {
          
          var currentMessage, loadingMessage;
          
          if(element.prop('tagName') === 'SELECT') {
            currentMessage = element.html();
            loadingMessage = '<option>'+ scope.iuiLoadingLabel + '</option>';
          } else {
            currentMessage = '<span>' + element.text() + '</span>';
            loadingMessage = '<span>'+ scope.iuiLoadingLabel + '</span>';
          }
          
          var loadingLabel = function(newValue, oldValue) {
            var el;
            if(newValue) {
              element.empty();
              el = $compile(loadingMessage)(scope);
              element.append(el);
              if (scope.disableDuringLoad) { 
                attrs.$set('disabled', 'disabled');
              }
            } else {
              element.empty();
              el = $compile(currentMessage)(scope);
              element.append(el);
              if (scope.disableDuringLoad) { 
                element.removeAttr('disabled');
              }
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