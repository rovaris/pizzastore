const pizzaMenuQuery = `
{
    pizzaSizes {
        name
        maxToppings
        basePrice
        toppings {
            topping {
                price
                name
            }
            defaultSelected
        }
    }
}`;


const MOCK_DATA = 
{
  "data": {
    "pizzaSizes": [
      {
        "name": "small",
        "maxToppings": 3,
        "basePrice": 9.89,
        "toppings": [
          {
            "topping": {
              "price": 0.4,
              "name": "pepperoni"
            },
            "defaultSelected": false
          },
          {
            "topping": {
              "price": 0.89,
              "name": "bannana peps"
            },
            "defaultSelected": false
          },
          {
            "topping": {
              "price": 1.29,
              "name": "sausage"
            },
            "defaultSelected": false
          },
          {
            "topping": {
              "price": 0.29,
              "name": "onion"
            },
            "defaultSelected": false
          },
          {
            "topping": {
              "price": 0.39,
              "name": "green olives"
            },
            "defaultSelected": false
          },
          {
            "topping": {
              "price": 0.1,
              "name": "cheese"
            },
            "defaultSelected": true
          },
          {
            "topping": {
              "price": 0.22,
              "name": "bell peps"
            },
            "defaultSelected": false
          }
        ]
      },
      {
        "name": "medium",
        "maxToppings": 5,
        "basePrice": 10.89,
        "toppings": [
          {
            "topping": {
              "price": 0.4,
              "name": "pepperoni"
            },
            "defaultSelected": true
          },
          {
            "topping": {
              "price": 0.89,
              "name": "bannana peps"
            },
            "defaultSelected": false
          },
          {
            "topping": {
              "price": 1.29,
              "name": "sausage"
            },
            "defaultSelected": false
          },
          {
            "topping": {
              "price": 0.29,
              "name": "onion"
            },
            "defaultSelected": false
          },
          {
            "topping": {
              "price": 0.39,
              "name": "green olives"
            },
            "defaultSelected": false
          },
          {
            "topping": {
              "price": 0.1,
              "name": "cheese"
            },
            "defaultSelected": true
          },
          {
            "topping": {
              "price": 0.22,
              "name": "bell peps"
            },
            "defaultSelected": false
          }
        ]
      },
      {
        "name": "large",
        "maxToppings": null,
        "basePrice": 13.49,
        "toppings": [
          {
            "topping": {
              "price": 0.4,
              "name": "pepperoni"
            },
            "defaultSelected": true
          },
          {
            "topping": {
              "price": 0.89,
              "name": "bannana peps"
            },
            "defaultSelected": false
          },
          {
            "topping": {
              "price": 1.29,
              "name": "sausage"
            },
            "defaultSelected": false
          },
          {
            "topping": {
              "price": 0.29,
              "name": "onion"
            },
            "defaultSelected": false
          },
          {
            "topping": {
              "price": 0.39,
              "name": "green olives"
            },
            "defaultSelected": false
          },
          {
            "topping": {
              "price": 0.1,
              "name": "cheese"
            },
            "defaultSelected": true
          },
          {
            "topping": {
              "price": 0.22,
              "name": "bell peps"
            },
            "defaultSelected": false
          }
        ]
      }
    ]
  }
};


export {
    pizzaMenuQuery as pizzaMenu,
    MOCK_DATA,
};
