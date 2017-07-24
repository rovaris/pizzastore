// @flow
import { uniqueId } from 'lodash';
import type { Pizza } from 'helpers/types';

export const ADD_PIZZA = uniqueId('ADD_PIZZA');
export const REMOVE_PIZZA = uniqueId('REMOVE_PIZZA');
export const RESET_CART = uniqueId('RESET_CART');


function addPizza(pizza: Pizza) {
    return (dispatch) => {
        dispatch({
            type: ADD_PIZZA,
            payload: { ...pizza },
        });
    };
}

function removePizza(pizza: Pizza) {
    return (dispatch) => {
        dispatch({
            type: REMOVE_PIZZA,
            payload: { ...pizza },
        });
    };
}

function resetCart() {
    return (dispatch) => {
        dispatch({
            type: RESET_CART,
        });
    };
}

export default {
    addPizza,
    removePizza,
    resetCart,
};
