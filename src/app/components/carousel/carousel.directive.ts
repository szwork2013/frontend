module frontend {
  'use strict';

  export interface ISlide {
    image: string;
    text: string;
  }

  /** @ngInject */
  export function cartCarousel(): ng.IDirective {

    return {
      restrict: 'E',
      scope: {},
      templateUrl: 'app/components/carousel/carousel.html',
      controller: CarouselController,
      controllerAs: 'vm',
      bindToController: true
    };

  }

  /** @ngInject */
  class CarouselController {
    public myInterval: Number;
    private slider: ISlide[];

    constructor($log: ng.ILogService, dataService: DataService) {
      this.myInterval = 3000;
      this.slider = [];
      // call this function when controller is first loaded
      this.activate($log, dataService);
    }

    /**
     * activate function called when CarouselController is loaded
     * @param {Object} toastr passed to activate function to show toastr notifications
     */
    activate($log: ng.ILogService, dataService: DataService) {
      $log.debug('activated cart carouserl directive');
      this.getSliderData($log, dataService);
    }

    /**
     * this function gets slider data
     * @param $log
     * @param dataService
     * @returns {IPromise<ISlide[]>}
     */
    getSliderData($log: ng.ILogService , dataService: DataService) {
      $log.debug('activated cart carouserl web service');
      return dataService.getSliderData()
        .then((data: any) => {
          this.slider = data;
          return this.slider;
        });
    }

    showToastr() {
      console.log('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
    }

  }
}
