module frontend {
  'use strict';

  /** @ngInject */
  export function cartNavbar(): ng.IDirective {

    return {
      restrict: 'E',
      scope: {},
      templateUrl: 'app/components/navbar/navbar.html',
      controller: NavbarController,
      controllerAs: 'vm',
      bindToController: true
    };

  }

  /** @ngInject */
  class NavbarController {
    public relativeDate: string;

    constructor(toastr: Toastr) {
      toastr.success('activated cart navbar directive');
    }
  }
}
