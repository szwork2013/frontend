module frontend {
  'use strict';

  export class RouterConfig {
    /** @ngInject */
    constructor($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider) {
      // todo: change controller as to vm
      $stateProvider
        .state('home', {
          url: '/home',
          templateUrl: 'app/main/main.html',
          controller: 'MainController',
          controllerAs: 'main'
        })
        .state('productDetail', {
          url: '/home/:category/:id',
          templateUrl: 'app/productDetail/productDetail.html',
          controller: 'ProductDetailController',
          controllerAs: 'vm'
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

      $urlRouterProvider.otherwise('/home');
    }

  }
}
