module frontend {
  'use strict';

  export interface IProductService {
    getProductData(): ng.IPromise<any>;
  }

  export class ProductService implements IProductService {
    private $http: ng.IHttpService;
    private apiCartURL: string;

    constructor($http: ng.IHttpService, apiCartURL: string) {
      this.$http = $http;
      this.apiCartURL = apiCartURL;
    }

    getProductData(): ng.IPromise<any> {
      return this.$http.get(this.apiCartURL + '/products')
        .then((response: ng.IHttpPromiseCallbackArg<any>): any => {
          return response.data;
        });
    }
  }
}
