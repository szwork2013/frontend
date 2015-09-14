(function () {
  'use strict';

  describe('service: carouselService', function () {
    var element, $scope, $controller, $compile, $httpBackend, URL, carouselService;

    beforeEach(module('frontend'));

    beforeEach(inject(function (_$rootScope_, _$httpBackend_, _$controller_, _carouselService_, apiCartURL) {
      $scope = _$rootScope_.$new();
      $httpBackend = _$httpBackend_;
      URL = apiCartURL;
      carouselService = _carouselService_;
    }));

    afterEach(function () {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    });

    it('should initialise get slider service and check that correct data is returned', inject(function () {
      expect(angular.isFunction(carouselService.getCarouselData)).toBeDefined;
      $httpBackend.whenGET(URL + '/slider').respond([
        {
          image: '../assets/images/banner_2-1920x641.jpg'
        },
        {
          image: '../assets/images/banner_3-1920x641.jpg'
        }
      ]);

      carouselService.getCarouselData().then(function (data){
        expect(data.isArray);
        expect(data.length).toBe(2);
      });
      expect($httpBackend.flush).not.toThrow();

    }));

  });
})();
