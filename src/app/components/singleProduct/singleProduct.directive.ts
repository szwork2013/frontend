module frontend {
  'use strict';

  /** @ngInject */
  export function cartSingleProduct(): ng.IDirective {

    return {
      restrict: 'E',
      scope: {},
      templateUrl: 'app/components/singleProduct/singleProduct.html',
      controller: SingleProductController,
      controllerAs: 'vm',
      bindToController: true
    };

  }

  /** @ngInject */
  class SingleProductController {
  }
}
