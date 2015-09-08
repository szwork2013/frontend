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
    public slides: ISlide[];
    constructor(toastr: Toastr) {
      this.myInterval = 5000;
      this.slides = [];
      // call this function when controller is first loaded
      this.activate(toastr);
    }

    /**
     * activate function called when CarouselController is loaded
     * @param {Object} toastr passed to activate function to show toastr notifications
     */
    activate(toastr: Toastr) {
      toastr.success('activated cart carouserl directive');
      for (var i: number = 0; i < 4; i++) {
        this.addSlide();
      }
    }

    /**
     * add slide function called on page load to activate carousel with four slides
     */
    addSlide() {
      var newWidth: Number = 1200 + this.slides.length + 4;
      this.slides.push({
        image: '//placekitten.com/' + newWidth + '/500',
        text: ['More', 'Extra', 'Lots of', 'Surplus'][this.slides.length % 4] + ' ' +
        ['Cats', 'Kittys', 'Felines', 'Cutes'][this.slides.length % 4]
      });
    }

  }
}
