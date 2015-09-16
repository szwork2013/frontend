module frontend {
  'use strict';

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

  export interface ICarouselController {
    myInterval: number;
    slider: ICarousel;
    carouselService: CarouselService;

    getSliderData(): void;
  }

  /** @ngInject */
  class CarouselController implements ICarouselController{
    myInterval: number;
    slider: ICarousel;
    $log: ng.ILogService;
    carouselService: CarouselService;

    constructor($log: ng.ILogService, carouselService: CarouselService) {
      this.myInterval = 3000;
      this.$log = $log;
      this.carouselService = carouselService;
      // call this function when controller is first loaded
      this.getSliderData();
    }

    /**
     * this function gets slider data
     * @param carouselService
     * @returns {IPromise<ICarousel>}
     */
    getSliderData() {
      this.$log.debug('activated cart carouserl web service');
      return this.carouselService.getCarouselData()
        .then((carousel: ICarousel): void => {
          this.slider = carousel;
        });
    }

  }
}
