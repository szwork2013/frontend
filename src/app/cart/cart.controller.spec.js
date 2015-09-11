(function() {
  'use strict';

  describe('controllers: CartController', function(){

    beforeEach(module('frontend'));

    it('should initialise the cart controller', inject(function($controller, $log) {
      var vm = $controller('CartController');
      expect($log.debug.logs).toContain(['activated cart controller']);
    }));
  });
})();
