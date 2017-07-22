import { handleActions } from 'redux-actions';
import { uniqueId } from 'lodash';

import {
    FORM_INIT,
    SELECT_PIZZA,
    SELECT_TOPPING,
    RESET_FORM,
} from './actions';

const PIZZA_FORM_INITIAL_STATE = {
    value: 0,
    label: "",
    toppings: [],
    maxToppings: null,
};

const getToppingCount = ( toppings ) => {
    return toppings.reduce((previous, current) => {
        if (current.selected) {
            return previous +1;
        }

        return previous;
    },0);
};

const toggleTopping = (toppings, topping) => {
    toppings.some(entry => {
        if (entry.uid === topping.uid) {
            entry.selected = topping.selected;
            return true;
        }

        return false;
    });
};

const unselectFirstTopping = (toppings, selectedTopping) => {
    toppings.some(entry => {
        if (entry.selected && entry.uid !== selectedTopping.uid) {
            entry.selected = false;
            return true;
        }
        return false;
    });
};

const PizzaFormReducer = handleActions({
    [SELECT_PIZZA]: (state, { payload }) => {
        const toppings = payload.toppings;
        toppings.map(topping => {
            topping.uid = uniqueId('topping');
            topping.selected = topping.defaultSelected;
        });

        return ({
            ...state,
            ...payload,
        });
    },
    [SELECT_TOPPING]: (state, { payload: { topping } } ) => {
        const { toppings, maxToppings } = state;

        toggleTopping(toppings, topping);

        if (maxToppings && getToppingCount(toppings) > maxToppings) {
            unselectFirstTopping(toppings, topping);
        }

        return ({
            ...state,
            toppings: [ ...toppings ],
        });
    },
    [RESET_FORM]: state => ({
        ...PIZZA_FORM_INITIAL_STATE,
    }),
}, PIZZA_FORM_INITIAL_STATE);

export default PizzaFormReducer;