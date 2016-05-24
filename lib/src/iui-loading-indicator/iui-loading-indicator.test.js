(function() {
  'use strict';

  describe('iui-loading-indicator directive', function () {
    var scope,
      element,
      el;
    beforeEach(function () {
      module('iuiLoadingIndicator');
      module('templates');
    });
    beforeEach(inject(function ($compile, $rootScope) {
      scope = $rootScope.$new();

      scope.name = 'Bart';
      
      element = angular.element('<div><iui-loading-indicator name="name"></iui-loading-indicator></div>');
      el = $compile(element)(scope);
      scope.$digest();
    }));

    it('should have one `<section>`', function() {
      expect(el[0].querySelectorAll('section').length).toBe(1);
    });

    
  });
})();