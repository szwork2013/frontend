(function () {
  'use strict';

  describe('directiver: cart-carousel', function () {
    var element, $scope, $controller, $compile, $httpBackend, URL;

    beforeEach(module('frontend'));

    beforeEach(inject(function (_$rootScope_, _$compile_, _$httpBackend_, _$controller_, apiCartURL) {
      $scope = _$rootScope_.$new();
      $httpBackend = _$httpBackend_;
      $controller = _$controller_;
      $compile = _$compile_;
      URL = apiCartURL;
    }));

    function createDirective() {
      element = angular.element('<cart-carousel></cart-carousel>');
      $compile(element)($scope);
      $scope.$digest();
      $controller = element.controller('cartCarousel');
    }

    it('should initialise the cart carousel directive', inject(function ($log) {
      // checks that html is rendered for directive
      $httpBackend.whenGET(URL + '/slider').respond([
        {
          image: '../assets/images/banner_2-1920x641.jpg'
        },
        {
          image: '../assets/images/banner_3-1920x641.jpg'
        }
      ]);
      createDirective();
      // check that directive controller has been activated
      expect($log.debug.logs).toContain(['activated cart carouserl web service']);
      expect(element.isolateScope().vm.slider.length).toBe(0);
      $httpBackend.flush();
      var items = element.find('#carousel');
      expect(items.length).toBe(1);
      // check that after getSliderData service call the length of lsider is 0
      expect(element.isolateScope().vm.slider.isArray);
      expect(element.isolateScope().vm.slider.length).toBe(2);
    }));
  });
})();
