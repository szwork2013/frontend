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
          url: '/:id',
          templateUrl: 'app/productDetail/productDetail.html',
          controller: 'ProductDetailController',
          controllerAs: 'detail'
        });

      $urlRouterProvider.otherwise('/');
    }

  }
}
