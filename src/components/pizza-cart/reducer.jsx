import { handleActions } from 'redux-actions';
import { uniqueId } from 'lodash';

import {
    ADD_PIZZA,
    REMOVE_PIZZA,
    RESET_CART,
} from './actions';

const PIZZA_CART_INITIAL_STATE = {
    pizzas: [], //Imutable Array
    total: 0,
};

const calculateTotalCost = (pizzaList):Number => {
    return pizzaList.reduce( (previous, current) => {
        return previous + (current.total);
    }, 0);
}

const calculatePizzaCost = (pizza):Number => {
    const { toppings } = pizza;
    const toppingsTotal = toppings.reduce( (previous, current) => {
        return previous + current.price;
    }, 0);
    return pizza.price + toppingsTotal;
}

const PizzaCartReducer = handleActions({
    [ADD_PIZZA]: (state,  { payload }) => {
        const { pizzas } = state;
        const pizzaCost = calculatePizzaCost(payload);
        payload.id = uniqueId('pizza');
        payload.total = pizzaCost;
        pizzas.push(payload);
        const total = calculateTotalCost(pizzas);
        return {
            ...state,
            pizzas: [ ...pizzas ],
            total
        };
    },
    [REMOVE_PIZZA]: (state, { payload  } ) => {
        const { pizzas } = state;
        const pizzaID = payload.id;

        const pizzaIndex = pizzas.findIndex( elem => elem.id === pizzaID);

        pizzas.splice(pizzaIndex, 1);

        const newPizzaList = Array.from(pizzas);

        const total = calculateTotalCost(newPizzaList);

        return {
            ...state,
            pizzas: newPizzaList,
            total,

        };
    },
    [RESET_CART]: state => ({
        ...PIZZA_CART_INITIAL_STATE,
    }),
}, PIZZA_CART_INITIAL_STATE);

export default PizzaCartReducer;
