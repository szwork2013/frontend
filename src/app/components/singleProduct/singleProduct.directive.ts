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

    private $log: ng.ILogService;
    private dataService: DataService;

    constructor($log: ng.ILogService, dataService: DataService) {
      this.$log = $log;
      this.dataService = dataService;

      this.getProducts();
    }

    getProducts() {
      this.$log.debug('called single product directive function');
      return this.dataService.getProducts()
        .then((data: any) => {
          this.products = data;
          return this.products;
        });
    }
  }
}
