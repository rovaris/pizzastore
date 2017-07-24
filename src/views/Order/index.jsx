import { reducers } from 'components';
import OrderView from './view';
import OrderViewReducer from './reducer';

const { PizzaCartReducer, PizzaFormReducer } = reducers;

// Reducers used in this particular view
export const OrderReducer = {
    PizzaCartReducer,
    PizzaFormReducer,
    OrderViewReducer,
};

export default OrderView;
