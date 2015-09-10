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

    constructor(toastr: Toastr) {
      toastr.success('activated cart footer directive');
    }
  }
}
