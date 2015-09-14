module frontend {
  'use strict';

  export interface ICarouselService {
    getCarouselData(): ng.IPromise<ICarousel>;
  }

  export interface ICarousel {
    image: string;
  }

  export class CarouselService implements ICarouselService{
    private $http: ng.IHttpService;
    private apiCartURL: string;

    constructor($http: ng.IHttpService, apiCartURL: string) {
      this.$http = $http;
      this.apiCartURL = apiCartURL;
    }
    getCarouselData(): ng.IPromise<ICarousel> {
      return this.$http.get(this.apiCartURL + '/slider')
        .then((response: ng.IHttpPromiseCallbackArg<ICarousel>) : ICarousel => {
          return response.data;
        });
    }
  }
}
