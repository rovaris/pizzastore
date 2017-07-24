// @flow
import { handleActions } from 'redux-actions';
import { uniqueId } from 'lodash';
import type { Pizza } from 'helpers/types';

import {
    ADD_PIZZA,
    REMOVE_PIZZA,
    RESET_CART,
} from './actions';

const PIZZA_CART_INITIAL_STATE = {
    pizzas: [],
    total: 0,
};

const calculateTotalCost = (pizzaList: Array<Pizza>):Number => (
    pizzaList.reduce((previous, current) => (
        previous + (current.total)
    ), 0)
);

const calculatePizzaCost = (pizza:Pizza):Number => {
    const { toppings } = pizza;
    const toppingsTotal = toppings.reduce((previous, current) => (
        previous + current.price
    ), 0);
    return pizza.basePrice + toppingsTotal;
};

const PizzaCartReducer = handleActions({
    [ADD_PIZZA]: (state, { payload }) => {
        const { pizzas } = state;
        const pizzaCost = calculatePizzaCost(payload);
        payload.id = uniqueId('pizza');
        payload.total = pizzaCost;
        pizzas.push(payload);
        const total = calculateTotalCost(pizzas);
        return {
            ...state,
            pizzas: [...pizzas],
            total,
        };
    },
    [REMOVE_PIZZA]: (state, { payload }) => {
        const { pizzas } = state;
        const pizzaID = payload.id;

        const pizzaIndex = pizzas.findIndex(elem => elem.id === pizzaID);

        pizzas.splice(pizzaIndex, 1);

        const newPizzaList = [...pizzas];

        const total = calculateTotalCost(newPizzaList);

        return {
            ...state,
            pizzas: newPizzaList,
            total,

        };
    },
    [RESET_CART]: () => ({
        ...PIZZA_CART_INITIAL_STATE,
    }),
}, PIZZA_CART_INITIAL_STATE);

export default PizzaCartReducer;
