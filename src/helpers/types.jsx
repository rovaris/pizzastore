// @flow

type Topping = {
    defaultSelected: boolean,
    name: string,
    price: number,
    selected?: boolean,
    uid?: boolean,
};

type Pizza = {
    name: string,
    basePrice: number,
    maxToppings: ?number,
    toppings: Array<Topping>,
};

export {
    Topping,
    Pizza,
};
