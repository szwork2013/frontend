(function() {
  'use strict';

  describe('ui router', function(){
    var $scope, $state;

    beforeEach(module('frontend'));

    beforeEach(inject(function(_$rootScope_, _$state_) {
      $scope = _$rootScope_.$new();
      $state = _$state_;
    }));

    it('should check the home state', inject(function() {
      $scope.$apply();
      expect($state.current.name).toEqual('home');
      expect($state.current.templateUrl).toEqual('app/main/main.html');
      expect($state.current.controller).toEqual('MainController');
    }));

    it('should check the productDetail state', inject(function() {
      $state.go('productDetail');
      $scope.$apply();
      expect($state.current.name).toEqual('productDetail');
      expect($state.current.templateUrl).toEqual('app/productDetail/productDetail.html');
      expect($state.current.controller).toEqual('ProductDetailController');
    }));

    it('should check the checkout state', inject(function() {
      $state.go('checkout');
      $scope.$apply();
      expect($state.current.name).toEqual('checkout');
      expect($state.current.templateUrl).toEqual('app/checkout/checkout.html');
      expect($state.current.controller).toEqual('CheckoutController');
    }));

    it('should check the cart state', inject(function() {
      $state.go('cart');
      $scope.$apply();
      expect($state.current.name).toEqual('cart');
      expect($state.current.templateUrl).toEqual('app/cart/cart.html');
      expect($state.current.controller).toEqual('CartController');
    }));

  });
})();
