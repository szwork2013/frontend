module frontend {
  'use strict';

  export class CartController {
    /** @ngInject */
    constructor (toastr: Toastr) {
      toastr.success('activated cart controller');
    }
  }
}
