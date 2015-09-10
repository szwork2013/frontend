module frontend {
  'use strict';

  export class CheckoutController {
    /** @ngInject */
    constructor (toastr: Toastr) {
      toastr.success('activated checkout controller');
    }
  }
}
