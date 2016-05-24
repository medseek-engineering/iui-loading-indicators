(function() {
  'use strict';

  angular
    .module('LoadingIndicatorDemoApp', ['ui.bootstrap','cgBusy','ngAnimate'])
    .constant('_', window._)
    .controller('LoadingIndicatorController', LoadingIndicatorController);
  
  function LoadingIndicatorController() {
    var vm = this;
    
    vm.delay = 0;
    vm.minDuration = 0;
    vm.message = 'Please Wait...';
    vm.backdrop = true;
    vm.promise = null;
    
    vm.demo = function(){
    
      vm.promise = $http.get('http://httpbin.org/delay/3');
    
    };
    
  }

})();