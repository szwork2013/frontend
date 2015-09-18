module frontend {
  'use strict';

  interface IProjectsScope extends ng.IScope {
    data: ICategory;
  }

  /** @ngInject */
  export function cartCategory(): ng.IDirective {

    return {
      restrict: 'E',
      scope: {},
      templateUrl: 'app/components/category/category.html',
      controller: CategoryController,
      controllerAs: 'vm',
      bindToController: true
    };

  }

  export interface ICategoryController {
    getCategoryData();
  }

  /** @ngInject */
  class CategoryController implements ICategoryController{

    $log: ng.ILogService;
    categoryService: CategoryService;
    category: ICategory;

    constructor ($log: ng.ILogService , categoryService: CategoryService) {
      this.$log = $log;
      this.categoryService = categoryService;

      this.getCategoryData();
    }

    getCategoryData() {
      return this.categoryService.getCategoryData()
        .then((category: ICategory): void => {
          this.category = category;
        });
    }
  }
}
