module.exports = function () {
  var faker = require("faker");
  var chance = require('chance').Chance();
  var _ = require("lodash");
  return {
    card: _.times(5, function (n) {
      return {
        id: n,
        card: faker.helpers.createCard()
      };
    }),
    products: [
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
      },
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
      },
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
          "value": "New",
          "data": {
            "key": "0",
            "value": "New"
          }
        }],
        "images": [
          {
            "id": 45,
            "name": "artpastels1.jpg",
            "url": {
              "http": "../assets/images/product-3.jpg",
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
      },
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
          "value": "New",
          "data": {
            "key": "0",
            "value": "New"
          }
        }],
        "images": [
          {
            "id": 45,
            "name": "artpastels1.jpg",
            "url": {
              "http": "../assets/images/product-4.jpg",
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
      },
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
          "value": "Normal",
          "data": {
            "key": "1",
            "value": "Normal"
          }
        }],
        "images": [
          {
            "id": 45,
            "name": "artpastels1.jpg",
            "url": {
              "http": "../assets/images/product-5.jpg",
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
    ],
    slider: [
      {
        image: '../assets/images/banner_2-1920x641.jpg'
      },
      {
        image: '../assets/images/banner_3-1920x641.jpg'
      }
    ],
    categories: [
      {
        'text': 'ELECTRONICS',
        'link': '/cart',
        'subMenu': [
          {
            'text': '1',
            'link': 'link'
          },
          {
            'text': '2',
            'link': 'link'
          }
        ]
      },
      {
        'text': 'HOME',
        'link': '/cart',
        'subMenu': []
      },
      {
        'text': 'KITCHEN',
        'link': '/cart',
        'subMenu': []
      },
      {
        'text': 'MEN',
        'link': '/cart',
        'subMenu': []
      },
      {
        'text': 'WOMEN',
        'link': '/cart',
        'subMenu': [
          {
            'text': '3',
            'link': 'link'
          },
          {
            'text': '4',
            'link': 'link'
          }
        ]
      }
    ]
  };
};
