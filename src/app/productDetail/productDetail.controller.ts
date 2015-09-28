module frontend {
  'use strict';

  export class ProductDetailController {
    private $log: ng.ILogService;
    private productService: IProductService;
    private detail: any;
    /** @ngInject */
    constructor ($log: ng.ILogService, productService: IProductService) {
      this.$log = $log;
      this.productService = productService;
      this.getProductData();

      $log.debug('activated product detail controller');
    }

    getProductData() {
      this.$log.debug('called single product directive function');
      return this.productService.getProductByID('PRD_A0002')
        .then((response: any): void => {
          this.detail = response[0];
        });
    }
  }
}
