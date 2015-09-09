module frontend {
  'use strict';

  export class ProductDetailController {
    /** @ngInject */
    constructor (toastr: Toastr) {
      toastr.success('activated product detail controller');
    }
  }
}
