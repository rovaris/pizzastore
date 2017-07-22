import { uniqueId } from 'lodash';

export const SELECT_PIZZA = uniqueId('SELECT_PIZZA');
export const SELECT_TOPPING = uniqueId('SELECT_TOPPING');
export const RESET_FORM = uniqueId('RESET_FORM');

function selectPizza(selectedPizza) {
    return (dispatch) => {
        dispatch({
            type: SELECT_PIZZA,
            payload: { ...selectedPizza },
        });
    };
}

function selectTopping(topping) {
    return (dispatch) => {
        dispatch({
            type: SELECT_TOPPING,
            payload: { topping },
        });
    };
}

function resetForm() {
    return (dispatch) => {
        dispatch({
            type: RESET_FORM,
        });
    };
}

export default {
    selectPizza,
    selectTopping,
    resetForm,
};
