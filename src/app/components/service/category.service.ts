module frontend {
  'use strict';

  export interface ICategoryService {
    getCategoryData(): ng.IPromise<any>;
  }

  export interface ISubMenu {
    text: string;
    link: string;
  }

  export interface ICategory {
    text: string;
    link: string;
    subMenu: ISubMenu;
  }

  export class CategoryService implements ICategoryService {
    private $http: ng.IHttpService;
    private apiCartURL: string;

    constructor($http: ng.IHttpService, apiCartURL: string) {
      this.$http = $http;
      this.apiCartURL = apiCartURL;
    }

    getCategoryData(): ng.IPromise<ICategory> {
      return this.$http.get(this.apiCartURL + '/categories')
        .then((response: ng.IHttpPromiseCallbackArg<ICategory>): ICategory => {
          return response.data;
        });
    }
  }
}
