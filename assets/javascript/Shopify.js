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
        node: document.getElementById('collection-component-c41a8f7fcb8'),
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
    "@media (min-width: 601px)": {
      "max-width": "calc(25% - 20px)",
      "margin-left": "20px",
      "margin-bottom": "50px",
      "width": "calc(25% - 20px)"
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
    "background-color": "#57aeb6",
    "color": "#251b15",
    "font-size": "13px",
    "padding-top": "14.5px",
    "padding-bottom": "14.5px",
    "padding-left": "36px",
    "padding-right": "36px",
    ":hover": {
      "background-color": "#4e9da4",
      "color": "#251b15"
    },
    "border-radius": "27px",
    ":focus": {
      "background-color": "#4e9da4"
    }
  },
  "variantTitle": {
    "font-weight": "normal"
  },
  "description": {
    "font-weight": "normal"
  },
  "price": {
    "font-weight": "normal"
  },
  "quantityInput": {
    "font-size": "13px",
    "padding-top": "14.5px",
    "padding-bottom": "14.5px"
  },
  "compareAt": {
    "font-family": "Helvetica Neue, sans-serif",
    "font-weight": "normal"
  }
}
},
"cart": {
"contents": {
  "button": true
},
"styles": {
  "button": {
    "background-color": "#57aeb6",
    "color": "#251b15",
    "font-size": "13px",
    "padding-top": "14.5px",
    "padding-bottom": "14.5px",
    ":hover": {
      "background-color": "#4e9da4",
      "color": "#251b15"
    },
    "border-radius": "27px",
    ":focus": {
      "background-color": "#4e9da4"
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
    "background-color": "#57aeb6",
    "color": "#251b15",
    "font-size": "13px",
    "padding-top": "14.5px",
    "padding-bottom": "14.5px",
    "padding-left": "36px",
    "padding-right": "36px",
    ":hover": {
      "background-color": "#4e9da4",
      "color": "#251b15"
    },
    "border-radius": "27px",
    ":focus": {
      "background-color": "#4e9da4"
    }
  },
  "variantTitle": {
    "font-weight": "normal"
  },
  "description": {
    "font-weight": "normal"
  },
  "price": {
    "font-weight": "normal"
  },
  "quantityInput": {
    "font-size": "13px",
    "padding-top": "14.5px",
    "padding-bottom": "14.5px"
  },
  "compareAt": {
    "font-family": "Helvetica Neue, sans-serif",
    "font-weight": "normal"
  }
}
},
"toggle": {
"styles": {
  "toggle": {
    "background-color": "#57aeb6",
    ":hover": {
      "background-color": "#4e9da4"
    },
    ":focus": {
      "background-color": "#4e9da4"
    }
  },
  "count": {
    "font-size": "13px",
    "color": "#251b15",
    ":hover": {
      "color": "#251b15"
    }
  },
  "iconPath": {
    "fill": "#251b15"
  }
}
},
"productSet": {
"styles": {
  "products": {
    "@media (min-width: 601px)": {
      "margin-left": "-20px"
    }
  }
}
}
}
      });
    });
  }
})();