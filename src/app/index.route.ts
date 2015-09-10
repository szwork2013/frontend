module frontend {
  'use strict';

  export class RouterConfig {
    /** @ngInject */
    constructor($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider) {
      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: 'app/main/main.html',
          controller: 'MainController',
          controllerAs: 'main'
        })
        .state('productDetail', {
          url: '/detail/:id',
          templateUrl: 'app/productDetail/productDetail.html',
          controller: 'ProductDetailController',
          controllerAs: 'detail'
        })
        .state('checkout', {
          url: '/checkout',
          templateUrl: 'app/checkout/checkout.html',
          controller: 'CheckoutController',
          controllerAs: 'checkout'
        })
        .state('cart', {
          url: '/cart',
          templateUrl: 'app/cart/cart.html',
          controller: 'CartController',
          controllerAs: 'cart'
        });

      $urlRouterProvider.otherwise('/');
    }

  }
}
