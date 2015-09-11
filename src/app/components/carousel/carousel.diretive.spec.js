(function () {
  'use strict';

  describe('directiver: cart-carousel', function () {
    var elm, scope, controller;

    beforeEach(module('frontend'));

    beforeEach(inject(function ($rootScope, $compile) {
      scope = $rootScope.$new();

      elm = angular.element(
        '<cart-carousel></cart-carousel>'
      );

      elm = $compile(elm)(scope);
      controller = elm.controller('CarouselController');
      scope.$digest();
    }));

    it('should initialise the cart carousel directive', inject(function () {
      var items = elm.find('#carousel');
      expect(items.length).toBe(1);
    }));
  });
})();
