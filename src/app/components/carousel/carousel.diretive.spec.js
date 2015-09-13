(function () {
  'use strict';

  describe('directiver: cart-carousel', function () {
    var elm, $scope, $controller, $compile, $httpBackend;

    beforeEach(module('frontend'));

    beforeEach(inject(function (_$rootScope_, _$compile_, _$httpBackend_, _$controller_, apiCartURL) {
      $scope = _$rootScope_.$new();
      $httpBackend = _$httpBackend_;
      $controller = _$controller_;
      $compile = _$compile_;

      $httpBackend.whenGET(apiCartURL + '/slider').respond([
        {
          image: '../assets/images/banner_2-1920x641.jpg'
        },
        {
          image: '../assets/images/banner_3-1920x641.jpg'
        }
      ]);

      elm = $compile('<cart-carousel></cart-carousel>')($scope);
      $scope.$digest();

    }));

    afterEach(inject(function () {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    }));

    it('should initialise the cart carousel directive', inject(function ($log) {
      // checks that html is rendered for directive
      var items = elm.find('#carousel');
      expect(items.length).toBe(1);
      // check that directive has been activated
      expect($log.debug.logs).toContain(['activated cart carouserl directive']);
      // check that directive controller has been activated
      expect($log.debug.logs).toContain(['activated cart carouserl web service']);
      $httpBackend.flush();
      // check that after getSliderData service call the length of lsider is 0
      expect(elm.isolateScope().vm.slider.isArray);
      expect(elm.isolateScope().vm.slider.length).toBe(2);
    }));
  });
})();
