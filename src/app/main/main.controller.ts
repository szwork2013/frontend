module frontend {
  'use strict';

  export class MainController {
    /** @ngInject */
    constructor ($log: ng.ILogService) {
      $log.debug('activated main controller');
    }
  }
}
