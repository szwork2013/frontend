module frontend {
  'use strict';

  export class MainController {
    private $log: ng.ILogService;
    private $http: ng.IHttpService;
    private user: any;

    /** @ngInject */
    constructor($log: ng.ILogService, $http: ng.IHttpService, toastr: Toastr) {
      this.$log = $log;
      this.$http = $http;
    }

    submit() {
      return this.$http.post('http://localhost:3000/auth/register', this.user)
        .then((response: any) => {
          toastr.success('successfully logged in');
          return response.data;
        })
        .catch((error: any) => {
          toastr.error('log in failed');
          this.$log.error('XHR Failed for getContributors.\n', error.data);
        });
    }
  }
}
/*
module frontend {
  'use strict';

  export class MainController {
    public awesomeThings: ITecThing[];
    public webDevTec: WebDevTecService;
    public classAnimation: string;

    /!* @ngInject *!/
    constructor ($timeout: ng.ITimeoutService, webDevTec: WebDevTecService, toastr: Toastr) {
      this.awesomeThings = new Array();
      this.webDevTec = webDevTec;
      this.classAnimation = '';

      this.activate($timeout);
    }

    activate($timeout: ng.ITimeoutService) {
      this.getWebDevTec();

      var self = this;

      $timeout(function() {
        self.classAnimation = 'rubberBand';
      }, 4000);
    }

    showToastr() {
      toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
      this.classAnimation = '';
    }

    getWebDevTec() {
      this.awesomeThings = this.webDevTec.tec;
    }
  }
}
*/
