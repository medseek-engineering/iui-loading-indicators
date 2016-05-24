(function() {
  'use strict';

  describe('iui-basic directive', function () {
    var scope,
      element,
      el;
    beforeEach(function () {
      module('iuiBasic');
      module('templates');
    });
    beforeEach(inject(function ($compile, $rootScope) {
      scope = $rootScope.$new();

      scope.name = 'Bart';
      
      element = angular.element('<div><iui-basic name="name"></iui-basic></div>');
      el = $compile(element)(scope);
      scope.$digest();
    }));

    it('should have one `<section>`', function() {
      expect(el[0].querySelectorAll('section').length).toBe(1);
    });

    
  });
})();