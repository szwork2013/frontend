(function () {
  'use strict';

  describe('directiver: cart-footer', function () {
    var elm, scope, controller;

    beforeEach(module('frontend'));

    beforeEach(inject(function ($rootScope, $compile) {
      scope = $rootScope.$new();

      elm = angular.element(
        '<cart-footer></cart-footer>'
      );

      elm = $compile(elm)(scope);
      controller = elm.controller('FooterController');
      scope.$digest();
    }));

    it('should initialise the cart footer directive', inject(function () {
      var items = elm.find('#footer');
      expect(items.length).toBe(1);
    }));

    it('should initialise the cart footer directive controller', inject(function ($log) {
      expect($log.debug.logs).toContain(['activated cart footer directive']);
    }));
  });

})();
