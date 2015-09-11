module frontend {
  'use strict';

  /** @ngInject */
  export function cartFooter(): ng.IDirective {

    return {
      restrict: 'E',
      scope: {},
      templateUrl: 'app/components/footer/footer.html',
      controller: FooterController,
      controllerAs: 'vm',
      bindToController: true
    };

  }

  /** @ngInject */
  class FooterController {
    public relativeDate: string;

    constructor($log: ng.ILogService) {
      $log.debug('activated cart footer directive');
    }
  }
}
