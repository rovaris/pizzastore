import { uniqueId } from "lodash";

export const ADD_PIZZA = uniqueId("ADD_PIZZA");
export const REMOVE_PIZZA = uniqueId("REMOVE_PIZZA");
export const RESET_CART = uniqueId("RESET_CART");


function addPizza(pizza) {
    return (dispatch) => {
        dispatch({
            type: ADD_PIZZA,
            payload: { ...pizza },
        });
    };
}

function removePizza(pizza) {
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
}
