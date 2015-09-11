(function () {
  'use strict';

  describe('directiver: cart-navbar', function () {
    var elm, scope;

    beforeEach(module('frontend'));

    beforeEach(inject(function ($rootScope, $compile) {
      scope = $rootScope.$new();

      elm = angular.element(
        '<cart-navbar></cart-navbar>'
      );

      elm = $compile(elm)(scope);
      scope.$digest();
    }));

    it('should initialise the cart navbar directive', inject(function () {
      var items = elm.find('#navbar');
      expect(items.length).toBe(1);
    }));
  });
})();
