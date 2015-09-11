module frontend {
  'use strict';

  export class CartController {
    /** @ngInject */
    constructor ($log: ng.ILogService) {
      $log.debug('activated cart controller');
    }
  }
}
