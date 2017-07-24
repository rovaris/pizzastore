import { handleActions } from 'redux-actions';
import { normalizeMenu } from 'helpers/data';

import {
    FETCH_MENU,
    FETCHED_MENU,
    FETCH_ERROR,
    RESET_MENU,
} from './actions';

const ORDER_VIEW_REDUCER_INITIAL_STATE = {
    menu: [],
    isLoading: false,
    error: null,
};

const OrderViewReducer = handleActions({
    [FETCH_MENU]: (state) => ({
        ...state,
        isLoading: true,
        error: null,
    }),
    [FETCHED_MENU]: (state, { payload }) => ({
            ...state,
            isLoading: false,
            menu: normalizeMenu(payload),
    }),
    [FETCH_ERROR]: (state, { payload }) => ({
        ...state,
        isLoading: false,
        error: payload,
    }),
    [RESET_MENU]: () => ({
        ...ORDER_VIEW_REDUCER_INITIAL_STATE,
    }),
}, ORDER_VIEW_REDUCER_INITIAL_STATE);

export default OrderViewReducer;
