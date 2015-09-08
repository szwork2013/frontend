module frontend {
  'use strict';

  export class MainController {
    /** @ngInject */
    constructor (toastr: Toastr) {
      toastr.success('activated main controller');
    }
  }
}
