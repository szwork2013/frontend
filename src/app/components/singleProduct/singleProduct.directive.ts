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

  export interface ISingleProductController {
    getProductData(): void;
  }

  /** @ngInject */
  class SingleProductController implements ISingleProductController{
    public products: any[];
    public count: string;
    public category: string;

    private $log: ng.ILogService;
    private productService: ProductService;

    constructor($log: ng.ILogService, productService: ProductService) {
      this.$log = $log;
      this.productService = productService;
      this.products = [];

      this.getProductData();
    }

    getProductData() {
      this.$log.debug('called single product directive function');
      return this.productService.getProductData()
        .then((product: any): void => {
          this.products = product;
        });
    }
  }
}
