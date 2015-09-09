module frontend {
  'use strict';

  /** @ngInject */
  export function cartSingleProduct(): ng.IDirective {

    return {
      restrict: 'E',
      scope: {
        count: '@',
        category: '@'
      },
      templateUrl: 'app/components/singleProduct/singleProduct.html',
      controller: SingleProductController,
      controllerAs: 'vm',
      bindToController: true
    };

  }

  /** @ngInject */
  class SingleProductController {
    public products: any[];
    public count: string;
    public category: string;

    constructor(toastr: Toastr, dataService: DataService) {
      this.getProducts(toastr, dataService);
    }

    getProducts(toastr: Toastr, dataService: DataService) {
      console.log('called single product directive function', this);
      return dataService.getProducts()
        .then((data: any) => {
          this.products = data;
          return this.products;
        });
    }
  }
}
