module frontend {
  'use strict';

  export class DataService {
    public apiCart = 'http://localhost:3002';

    private $log: ng.ILogService;
    private $http: ng.IHttpService;
    private apiCartURL: string

    /** @ngInject */
    constructor($log: ng.ILogService, $http: ng.IHttpService, apiCartURL: string) {
      this.$log = $log;
      this.$http = $http;
      this.apiCartURL = apiCartURL;
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

    getSliderData() {
      return this.$http.get(this.apiCartURL + '/slider')
        .then((response: any) => {
          return response.data;
        })
        .catch((error: any) => {
          this.$log.error('XHR Failed for getSlider.\n', error.data);
        });
    }
  }
}
