'use strict';

(function () {
  'use strict';

  angular.module('iui.basic', ['iui.basicTemplates', 'iuiBasic']);
})();
'use strict';

(function () {
  'use strict';

  angular.module('iuiBasic', []);
})();
'use strict';

(function () {
  'use strict';

  var iuiBasicConfig = {};

  angular.module('iuiBasic').value('iuiBasicConfig', iuiBasicConfig);
})();
'use strict';

(function () {
  'use strict';

  // Follow the Angular Style Guide: https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md

  angular.module('iuiBasic').directive('iuiBasic', iuiBasic);

  function iuiBasic() {
    // Babel is preprocessing JS, so we can use ES2015 features https://babeljs.io/docs/learn-es2015/
    var directive = {
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
    var vm = this;
    vm.hello = 'Hello';
    // Public methods are listed here:
    vm.exampleMethod = exampleMethod;

    // if activate function is necessary
    // this gives you the ability to order the sequence of method calls
    // made when the directive is created
    activate();

    // Methods in the form of function syntax below

    function activate() {}

    function exampleMethod() {
      return 'foo';
    }
  }
})();
'use strict';

(function (module) {
  try {
    module = angular.module('iui.basicTemplates');
  } catch (e) {
    module = angular.module('iui.basicTemplates', []);
  }
  module.run(['$templateCache', function ($templateCache) {
    $templateCache.put('/$iui-basic/iui-basic/iui-basic.html', '<section>\n' + '  {{basic.hello}} {{basic.name}}\n' + '</section>');
  }]);
})();