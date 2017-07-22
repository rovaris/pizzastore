import CurrencyValue from './CurrencyValue';
import { PizzaCart, PizzaCartReducer, PizzaCartActions } from './pizza-cart';
import { PizzaForm, PizzaFormReducer, PizzaFormActions } from './pizza-form';

export const actions = {
    PizzaCartActions,
    PizzaFormActions,
}

export const reducers = {
    PizzaCartReducer,
    PizzaFormReducer,
};

export {
    CurrencyValue,
    PizzaForm,
    PizzaCart,
};
