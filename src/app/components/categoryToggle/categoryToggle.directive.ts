module frontend {
  'use strict';

  interface ICategoryToggleScope extends ng.IScope {
    data: ICategory;
  }

  /** @ngInject */
  export function cartCategoryToggle($compile: ng.ICompileProvider): ng.IDirective {

    return {
      restrict: 'A',
      scope: {
        data: '='
      },
      link: linkFunc
    };

  }

  function linkFunc(scope: ICategoryToggleScope, el: JQuery, attr: any) {
    el.attr('collapse', 'true');
    el.on('click', function() {
      /*console.log(scope.data);
      angular.forEach(scope.data.subMenu, function(value, key) {
        var contentTr = angular.element('<tr><td>test</td></tr>');
            contentTr.after(el);
      });*/
      var node = angular.element('<div>Hello</div>');
      node.append(el);
    });
  }

  function addSubMenu(nodes, el) {
    angular.forEach(nodes, function(value, key) {
      el.after('<div>Hello</div>');
    });
  }
}
