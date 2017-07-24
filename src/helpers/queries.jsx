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

export {
    pizzaMenuQuery as pizzaMenu,
};
