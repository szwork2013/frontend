/// <reference path="../../.tmp/typings/tsd.d.ts" />


/// <reference path="index.route.ts" />

/// <reference path="index.config.ts" />
/// <reference path="index.run.ts" />
/// <reference path="main/main.controller.ts" />
/// <reference path="productDetail/productDetail.controller.ts" />
/// <reference path="checkout/checkout.controller.ts" />
/// <reference path="cart/cart.controller.ts" />
/// <reference path="../app/components/carousel/carousel.directive.ts" />
/// <reference path="../app/components/navbar/navbar.directive.ts" />
/// <reference path="../app/components/footer/footer.directive.ts" />
/// <reference path="../app/components/singleProduct/singleProduct.directive.ts" />
/// <reference path="../app/components/malarkey/malarkey.directive.ts" />
/// <reference path="../app/components/webDevTec/webDevTec.service.ts" />
/// <reference path="../app/components/githubContributor/githubContributor.service.ts" />
/// <reference path="../app/components/service/data.service.ts" />

declare var malarkey: any;
declare var toastr: Toastr;
declare var moment: moment.MomentStatic;
declare var _: _.LoDashStatic;

module frontend {
  'use strict';

  angular.module('frontend', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ui.router', 'ui.bootstrap'])
    .constant('malarkey', malarkey)
    .constant('toastr', toastr)
    .constant('moment', moment)
    .constant('_', _)
    .constant('apiCartURL', 'http://localhost:3002')
    .config(Config)

    .config(RouterConfig)

    .run(RunBlock)
    .service('githubContributor', GithubContributor)
    .service('webDevTec', WebDevTecService)
    .service('dataService', DataService)
    .controller('MainController', MainController)
    .controller('ProductDetailController', ProductDetailController)
    .controller('CheckoutController', CheckoutController)
    .controller('CartController', CartController)
    .directive('cartNavbar', cartNavbar)
    .directive('cartFooter', cartFooter)
    .directive('cartCarousel', cartCarousel)
    .directive('cartSingleProduct', cartSingleProduct)
    .directive('acmeMalarkey', acmeMalarkey);
}
