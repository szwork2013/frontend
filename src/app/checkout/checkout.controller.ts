module frontend {
  'use strict';

  export class CheckoutController {
    /** @ngInject */
    constructor ($log: ng.ILogService) {
      $log.debug('activated checkout controller');
    }
  }
}
