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
          iuiLoadingLabel: '='
        },
        link: function(scope, element, attrs) {
          
          var currentMessage = document.getElementById('loading-button').innerHTML;
          var loadingMessage = 'Demoing';
          
          console.log(attrs.iuiLoadingLabel);
          console.log(element);
          
          if(attrs.loading) {
            console.log(loadingMessage);
          } else {
            console.log(currentMessage);
          }
          
        }
      };
      return directive;    
    }]);
  

  function LoadingLabelController() {
    // Define Variables up top
    let vm = this;
    
    
    
  }



})();