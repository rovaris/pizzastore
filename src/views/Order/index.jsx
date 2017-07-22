import { reducers } from 'components';
import OrderView from './view';

const { PizzaCartReducer, PizzaFormReducer } = reducers;

// Reducers used in this particular view
export const OrderReducer = {
    PizzaCartReducer,
    PizzaFormReducer,
};

export default OrderView;
