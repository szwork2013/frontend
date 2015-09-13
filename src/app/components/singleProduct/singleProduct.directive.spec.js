(function () {
  'use strict';

  describe('directiver: single-product', function () {
    var element, $scope, $controller, $compile, $httpBackend, URL;

    beforeEach(module('frontend'));

    beforeEach(inject(function (_$rootScope_, _$compile_, _$httpBackend_, _$controller_, apiCartURL) {
      $scope = _$rootScope_.$new();
      $httpBackend = _$httpBackend_;
      $controller = _$controller_;
      $compile = _$compile_;
      URL = apiCartURL;
    }));

    afterEach(function() {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    });

    function createDirective(countValue, categoryValue) {
      var countValue = countValue || 4;
      var categoryValue = categoryValue || 'Electronics';
      element = angular.element('<cart-single-product count=' + countValue + ' category=' + categoryValue + '></cart-single-product>');
      $compile(element)($scope);
      $scope.$digest();
      $controller = element.controller('cartSingleProduct');
    }

    it('should initialise the single product directive', inject(function ($log) {
      $httpBackend.whenGET(URL + '/products').respond([
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
      createDirective(4, 'Electronics');
      // check that directive has been activated
      expect($log.debug.logs).toContain(['called single product directive function']);
      expect(element.isolateScope().vm.products.length).toBe(0);
      $httpBackend.flush();
      // checks that html is rendered for directive
      var items = element.find('#single-product');
      expect(items[0]).toBeDefined();
      // check that after getSliderData service call the length of lsider is 0
      expect(element.isolateScope().vm.products.isArray);
      expect(element.isolateScope().vm.products.length).toBe(1);
    }));

    it('should setup scope variables correctly', inject(function ($log) {
      $httpBackend.whenGET(URL + '/products').respond([
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
      createDirective();
      $httpBackend.flush();
      expect(element.isolateScope().vm.count).toBe('4');
      expect(element.isolateScope().vm.category).toBe('Electronics');
    }));

    it('should set products to empty array in case of error', inject(function() {
      $httpBackend.whenGET(URL + '/products').respond([]);
      createDirective();
      $httpBackend.flush();
      expect(element.isolateScope().vm.products.isArray);
      expect(element.isolateScope().vm.products.length).toBe(0);
    }));

  });
})();
