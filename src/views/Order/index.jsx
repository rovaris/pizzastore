import { default as OrderView } from './view';
import { reducers } from 'components' ;

const { PizzaCartReducer, PizzaFormReducer } = reducers;

// Reducers used in this particular view
export const OrderReducer = {
    PizzaCartReducer,
    PizzaFormReducer,
};

export default OrderView;
