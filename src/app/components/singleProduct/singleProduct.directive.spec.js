(function () {
  'use strict';

  describe('directiver: single-product', function () {
    var elm, $scope, $controller, $compile, $httpBackend;

    beforeEach(module('frontend'));

    beforeEach(inject(function (_$rootScope_, _$compile_, _$httpBackend_, _$controller_, apiCartURL) {
      $scope = _$rootScope_.$new();
      $httpBackend = _$httpBackend_;
      $controller = _$controller_;
      $compile = _$compile_;

      $httpBackend.whenGET(apiCartURL + '/products').respond([
        {
          "id": 6,
          "order": null,
          "created_at": null,
          "updated_at": "2014-08-12 15:28:20",
          "sku": "PRD_A0002",
          "title": "Conté Sticks",
          "slug": "conte-sticks",
          "price": 9.99,
          "sale_price": 8.99,
          "status": {
            "value": "Live",
            "data": {
              "key": "1",
              "value": "Live"
            }
          },
          "category": {
            "value": "Featured",
            "data": {
              "60": {
                "id": 60,
                "order": 6,
                "created_at": null,
                "updated_at": "2014-08-29 09:37:57",
                "parent": null,
                "title": "Featured",
                "slug": "featured",
                "status": {
                  "value": "Live",
                  "data": {
                    "key": "1",
                    "value": "Live"
                  }
                },
                "description": "Featured products",
                "tax_band": null
              }
            }
          },
          "stock_level": 1050,
          "stock_status": {
            "value": "In Stock",
            "data": {
              "key": "1",
              "value": "In Stock"
            }
          },
          "description": "Drawing with conté sticks is a sure way to achive high contrast, richly pigmented images. This media can also be used to shapen lines as a final stage of a painting's development. ",
          "requires_shipping": {
            "value": "Yes",
            "data": {
              "key": "1",
              "value": "Yes"
            }
          },
          "weight": 10,
          "height": 10,
          "width": 10,
          "depth": 10,
          "brand": null,
          "collection": null,
          "tax_band": {
            "value": "Default",
            "data": {
              "id": 1,
              "title": "Default",
              "description": null,
              "rate": 20,
              "created_at": null,
              "updated_at": null
            }
          },
          "catalog_only": {
            "value": "No",
            "data": {
              "key": "0",
              "value": "No"
            }
          },
          "pricing": {
            "formatted": {
              "with_tax": "£11.99",
              "without_tax": "£9.99",
              "tax": "£2.00"
            },
            "rounded": {
              "with_tax": 11.99,
              "without_tax": 9.99,
              "tax": 2
            },
            "raw": {
              "with_tax": 11.988,
              "without_tax": 9.99,
              "tax": 1.998
            }
          },
          "is_variation": false,
          "modifiers": [{
            "value": "Sale",
            "data": {
              "key": "2",
              "value": "Sale"
            }
          }],
          "images": [
            {
              "id": 45,
              "name": "artpastels1.jpg",
              "url": {
                "http": "../assets/images/product-2.jpg",
                "https": "https://commercecdn.com/1/artpastels1.jpg"
              },
              "segments": {
                "domain": "commercecdn.com/",
                "suffix": "1/artpastels1.jpg"
              }
            },
            {
              "id": 47,
              "name": "artpastels2.jpg",
              "url": {
                "http": "../assets/images/product-2.jpg",
                "https": "https://commercecdn.com/1/artpastels2.jpg"
              },
              "segments": {
                "domain": "commercecdn.com/",
                "suffix": "1/artpastels2.jpg"
              }
            }
          ]
        }
      ]);

      $scope.count = 4;
      $scope.category = 'Electronics';

      elm = $compile('<cart-single-product></cart-single-product>')($scope);
      $scope.$digest();

    }));

    afterEach(inject(function () {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    }));

    it('should initialise the cart carousel directive', inject(function ($log) {
      // checks that html is rendered for directive
      // var items = elm.find('#single-product');
      // expect(items.length).toBe(1);
      // check that directive has been activated
      expect($log.debug.logs).toContain(['called single product directive function']);
      $httpBackend.flush();
      // check that after getSliderData service call the length of lsider is 0
      expect(elm.isolateScope().vm.products.isArray);
      expect(elm.isolateScope().vm.products.length).toBe(1);
    }));

    it('should setup scope variables correctly', inject(function ($log) {
      $httpBackend.flush();
      expect($scope.count.isNumber);
      expect($scope.category.isString);
      expect($scope.count).toBe(4);
      expect($scope.category).toBe('Electronics');
    }));
  });
})();
