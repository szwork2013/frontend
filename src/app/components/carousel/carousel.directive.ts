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
    private $log: ng.ILogService;
    private dataService: DataService;

    constructor($log: ng.ILogService, dataService: DataService) {
      this.myInterval = 3000;
      this.slider = [];
      this.$log = $log;
      this.dataService = dataService;
      // call this function when controller is first loaded
      this.getSliderData();
    }

    /**
     * this function gets slider data
     * @param $log
     * @param dataService
     * @returns {IPromise<ISlide[]>}
     */
    getSliderData() {
      this.$log.debug('activated cart carouserl web service');
      return this.dataService.getSliderData()
        .then((data: any) => {
          this.slider = data;
          return this.slider;
        });
    }

  }
}
