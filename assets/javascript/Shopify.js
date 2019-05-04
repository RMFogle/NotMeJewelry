(function () {
    var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
    if (window.ShopifyBuy) {
      if (window.ShopifyBuy.UI) {
        ShopifyBuyInit();
      } else {
        loadScript();
      }
    } else {
      loadScript();
    }

    function loadScript() {
      var script = document.createElement('script');
      script.async = true;
      script.src = scriptURL;
      (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
      script.onload = ShopifyBuyInit;
    }

    function ShopifyBuyInit() {
      var client = ShopifyBuy.buildClient({
        domain: 'not-me-jewelry.myshopify.com',
        storefrontAccessToken: '9a79d083fa75824091f8e0aaa670c069',
      });

      ShopifyBuy.UI.onReady(client).then(function (ui) {
        ui.createComponent('collection', {
          id: 131089924168,
          node: document.getElementById('collection-component-a8df700adec'),
          moneyFormat: '%24%7B%7Bamount%7D%7D',
          options: {
"product": {
  "buttonDestination": "modal",
  "variantId": "all",
  "isButton": false,
  "contents": {
    "imgWithCarousel": false,
    "variantTitle": false,
    "options": false,
    "description": false,
    "buttonWithQuantity": false,
    "quantity": false
  },
  "text": {
    "button": "VIEW PRODUCT"
  },
  "styles": {
    "product": {
      "text-align": "left",
      "@media (min-width: 601px)": {
        "max-width": "calc(33.33333% - 30px)",
        "margin-left": "30px",
        "margin-bottom": "50px",
        "width": "calc(33.33333% - 30px)"
      },
      "imgWrapper": {
        "position": "relative",
        "height": "0",
        "padding-top": "calc(75% + 15px)"
      },
      "img": {
        "height": "calc(100% - 15px)",
        "position": "absolute",
        "left": "0",
        "right": "0",
        "top": "0"
      }
    },
    "button": {
      "background-color": "#b69057",
      "color": "#6fd3c0",
      "font-size": "13px",
      "padding-top": "14.5px",
      "padding-bottom": "14.5px",
      "padding-left": "36px",
      "padding-right": "36px",
      ":hover": {
        "background-color": "#a4824e",
        "color": "#6fd3c0"
      },
      "border-radius": "27px",
      ":focus": {
        "background-color": "#a4824e"
      }
    },
    "quantityInput": {
      "font-size": "13px",
      "padding-top": "14.5px",
      "padding-bottom": "14.5px"
    }
  }
},
"cart": {
  "contents": {
    "button": true
  },
  "styles": {
    "button": {
      "background-color": "#b69057",
      "color": "#6fd3c0",
      "font-size": "13px",
      "padding-top": "14.5px",
      "padding-bottom": "14.5px",
      ":hover": {
        "background-color": "#a4824e",
        "color": "#6fd3c0"
      },
      "border-radius": "27px",
      ":focus": {
        "background-color": "#a4824e"
      }
    },
    "footer": {
      "background-color": "#ffffff"
    }
  }
},
"modalProduct": {
  "contents": {
    "img": false,
    "imgWithCarousel": true,
    "variantTitle": false,
    "buttonWithQuantity": true,
    "button": false,
    "quantity": false
  },
  "styles": {
    "product": {
      "@media (min-width: 601px)": {
        "max-width": "100%",
        "margin-left": "0px",
        "margin-bottom": "0px"
      }
    },
    "button": {
      "background-color": "#b69057",
      "color": "#6fd3c0",
      "font-size": "13px",
      "padding-top": "14.5px",
      "padding-bottom": "14.5px",
      "padding-left": "36px",
      "padding-right": "36px",
      ":hover": {
        "background-color": "#a4824e",
        "color": "#6fd3c0"
      },
      "border-radius": "27px",
      ":focus": {
        "background-color": "#a4824e"
      }
    },
    "quantityInput": {
      "font-size": "13px",
      "padding-top": "14.5px",
      "padding-bottom": "14.5px"
    }
  }
},
"toggle": {
  "styles": {
    "toggle": {
      "background-color": "#b69057",
      ":hover": {
        "background-color": "#a4824e"
      },
      ":focus": {
        "background-color": "#a4824e"
      }
    },
    "count": {
      "font-size": "13px",
      "color": "#6fd3c0",
      ":hover": {
        "color": "#6fd3c0"
      }
    },
    "iconPath": {
      "fill": "#6fd3c0"
    }
  }
},
"modal": {
  "styles": {
    "modal": {
      "background-color": "#978746"
    }
  }
},
"productSet": {
  "styles": {
    "products": {
      "@media (min-width: 601px)": {
        "margin-left": "-30px"
      }
    }
  }
}
}
        });
      });
    }
  })();
  /*]]>*/
  /*]]>*/


// var client = ShopifyBuy.buildClient({
//     apiKey: "ff18711c489e96b208e5c0b42f77ad64",
//     domain: "embeds.myshopify.com",
//     appId: "9a79d083fa75824091f8e0aaa670c069"
// });

// var ui = ShopifyBuy.UI.init(client);

// ui.createComponent("product",{
//     id: 3543077027912,
//     options: {
//         product:{
//             buttonDestination: "modal"
//         }
//     }
// });
// //})var client = ShopifyBuy.buildClient({

    // 'product-component-61613039127'
    // 'product-component-c89be88e626'
  
    
    /*<![CDATA[*/

//     (function () {
//       var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
//       if (window.ShopifyBuy) {
//         if (window.ShopifyBuy.UI) {
//           ShopifyBuyInit();
//         } else {
//           loadScript();
//         }
//       } else {
//         loadScript();
//       }

//       function loadScript() {
//         var script = document.createElement('script');
//         script.async = true;
//         script.src = scriptURL;
//         (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
//         script.onload = ShopifyBuyInit;
//       }

//       function ShopifyBuyInit() {
//         var client = ShopifyBuy.buildClient({
//           domain: 'not-me-jewelry.myshopify.com',
//           storefrontAccessToken: '9a79d083fa75824091f8e0aaa670c069',
//         });

//         ShopifyBuy.UI.onReady(client).then(function (ui) {
//           ui.createComponent('product', {
//             id: [3543077027912],
//             node: document.getElementById('product-component-61613039127'),
//             moneyFormat: '%24%7B%7Bamount%7D%7D',
//             options: {
//   "product": {
//     "variantId": "all",
//     "width": "240px",
//     "contents": {
//       "imgWithCarousel": false,
//       "variantTitle": false,
//       "description": false,
//       "buttonWithQuantity": false,
//       "quantity": false
//     },
//     "styles": {
//       "product": {
//         "@media (min-width: 601px)": {
//           "max-width": "100%",
//           "margin-left": "0",
//           "margin-bottom": "50px"
//         }
//       },
//       "compareAt": {
//         "font-size": "12px"
//       }
//     }
//   },
//   "cart": {
//     "contents": {
//       "button": true
//     },
//     "styles": {
//       "footer": {
//         "background-color": "#ffffff"
//       }
//     }
//   },
//   "modalProduct": {
//     "contents": {
//       "img": false,
//       "imgWithCarousel": true,
//       "variantTitle": false,
//       "buttonWithQuantity": true,
//       "button": false,
//       "quantity": false
//     },
//     "styles": {
//       "product": {
//         "@media (min-width: 601px)": {
//           "max-width": "100%",
//           "margin-left": "0px",
//           "margin-bottom": "0px"
//         }
//       }
//     }
//   },
//   "productSet": {
//     "styles": {
//       "products": {
//         "@media (min-width: 601px)": {
//           "margin-left": "-20px"
//         }
//       }
//     }
//   }
// }
//           });
//         });
//       }
//     })();

//     /*]]>*/
   
   
//     /*<![CDATA[*/

//     (function () {
//       var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
//       if (window.ShopifyBuy) {
//         if (window.ShopifyBuy.UI) {
//           ShopifyBuyInit();
//         } else {
//           loadScript();
//         }
//       } else {
//         loadScript();
//       }

//       function loadScript() {
//         var script = document.createElement('script');
//         script.async = true;
//         script.src = scriptURL;
//         (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
//         script.onload = ShopifyBuyInit;
//       }

//       function ShopifyBuyInit() {
//         var client = ShopifyBuy.buildClient({
//           domain: 'not-me-jewelry.myshopify.com',
//           storefrontAccessToken: '9a79d083fa75824091f8e0aaa670c069',
//         });

//         ShopifyBuy.UI.onReady(client).then(function (ui) {
//           ui.createComponent('product', {
//             id: [3544808390728],
//             node: document.getElementById('product-component-c89be88e626'),
//             moneyFormat: '%24%7B%7Bamount%7D%7D',
//             options: {
//   "product": {
//     "variantId": "all",
//     "width": "240px",
//     "contents": {
//       "imgWithCarousel": false,
//       "variantTitle": false,
//       "description": false,
//       "buttonWithQuantity": false,
//       "quantity": false
//     },
//     "styles": {
//       "product": {
//         "@media (min-width: 601px)": {
//           "max-width": "100%",
//           "margin-left": "0",
//           "margin-bottom": "50px"
//         }
//       },
//       "compareAt": {
//         "font-size": "12px"
//       }
//     }
//   },
//   "cart": {
//     "contents": {
//       "button": true
//     },
//     "styles": {
//       "footer": {
//         "background-color": "#ffffff"
//       }
//     }
//   },
//   "modalProduct": {
//     "contents": {
//       "img": false,
//       "imgWithCarousel": true,
//       "variantTitle": false,
//       "buttonWithQuantity": true,
//       "button": false,
//       "quantity": false
//     },
//     "styles": {
//       "product": {
//         "@media (min-width: 601px)": {
//           "max-width": "100%",
//           "margin-left": "0px",
//           "margin-bottom": "0px"
//         }
//       }
//     }
//   },
//   "productSet": {
//     "styles": {
//       "products": {
//         "@media (min-width: 601px)": {
//           "margin-left": "-20px"
//         }
//       }
//     }
//   }
// }
//           });
//         });
//       }
//     })();
//     /*]]>*/
// var newProduct = 
// $(".shopProducts").append(newProduct)
  
   