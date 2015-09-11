(function() {
  'use strict';

  describe('controllers: ProductDetailController', function(){

    beforeEach(module('frontend'));

    it('should initialise the cart controller', inject(function($controller, $log) {
      var vm = $controller('ProductDetailController');
      expect($log.debug.logs).toContain(['activated product detail controller']);
    }));
  });
})();
