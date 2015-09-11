(function() {
  'use strict';

  describe('controllers: CheckoutController', function(){

    beforeEach(module('frontend'));

    it('should initialise the cart controller', inject(function($controller, $log) {
      var vm = $controller('CheckoutController');
      expect($log.debug.logs).toContain(['activated checkout controller']);
    }));
  });
})();
