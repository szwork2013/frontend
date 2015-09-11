(function() {
  'use strict';

  describe('controllers: MainController', function(){

    beforeEach(module('frontend'));

    it('should initialise the main controller', inject(function($controller, $log) {
      var vm = $controller('MainController');
      expect($log.debug.logs).toContain(['activated main controller']);
    }));
  });
})();
