(function() {
  'use strict';

  angular
    .module('LoadingIndicatorDemoApp', ['ui.bootstrap','ngAnimate', 'iui.loadingIndicator'])
    .constant('_', window._)
    .controller('LoadingIndicatorController', LoadingIndicatorController);
  
  LoadingIndicatorController.$inject = ['$http'];
  
  function LoadingIndicatorController($http) {
    var vm = this;
    
    vm.delay = 0;
    vm.minDuration = 0;
    vm.message = 'Please Wait...';
    vm.backdrop = true;
    vm.promise = null;
    vm.world = "World";
    
    vm.demo = function(){
      console.log('This is working');
      vm.promise = $http.get('http://httpbin.org/delay/3');
      
    };
    
  }

})();