(function() {
  'use strict';

  // Follow the Angular Style Guide: https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md

  angular.module('iuiBasic')
    .directive('iuiBasic', iuiBasic);

  function iuiBasic() {
    // Babel is preprocessing JS, so we can use ES2015 features https://babeljs.io/docs/learn-es2015/
    let directive = {
      restrict: 'E',
      templateUrl: '/$iui-basic/iui-basic/iui-basic.html',
      // Controller names must be capitalized because they are constructors
      controller: BasicController,
      // controllerAs & bindToController in directive syntax is only available in Ang 1.3+
      controllerAs: 'basic',
      bindToController: true,
      scope: {
        name: '='
      }
    };
    return directive;
  }

  BasicController.$inject = [];

  function BasicController() {
    // Define Variables up top
    let vm = this;
    vm.hello = 'Hello';
    // Public methods are listed here:
    vm.exampleMethod = exampleMethod;

    // if activate function is necessary
    // this gives you the ability to order the sequence of method calls
    // made when the directive is created
    activate();


    // Methods in the form of function syntax below

    function activate() {

    }

    function exampleMethod() {
      return 'foo';
    }
  }


})();