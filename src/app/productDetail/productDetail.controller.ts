module frontend {
  'use strict';

  export class ProductDetailController {
    /** @ngInject */
    constructor ($log: ng.ILogService) {
      $log.debug('activated product detail controller');
    }
  }
}
