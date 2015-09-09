module frontend {
  'use strict';

  export class DataService {
    public apiCart = 'http://localhost:3002';

    private $log: ng.ILogService;
    private $http: ng.IHttpService;

    /** @ngInject */
    constructor($log: ng.ILogService, $http: ng.IHttpService) {
      this.$log = $log;
      this.$http = $http;
    }

    getProducts() {
      return this.$http.get(this.apiCart + '/products')
        .then((response: any) => {
          return response.data;
        })
        .catch((error: any) => {
          this.$log.error('XHR Failed for getProducts.\n', error.data);
        });
    }
  }
}
