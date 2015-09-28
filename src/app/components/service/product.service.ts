module frontend {
  'use strict';

  // todo : declare a product interface for the product data type and change the any
  export interface IProductService {
    getProductData(): ng.IPromise<any>;
    getProductByID(id: string): ng.IPromise<any>;
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

    getProductByID(id: string): ng.IPromise<any> {
      return this.$http.get(this.apiCartURL + '/products?sku=' + id)
        .then((response: ng.IHttpPromiseCallbackArg<any>): any => {
          return response.data;
        });
    }
  }
}
