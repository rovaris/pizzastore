import { uniqueId } from 'lodash';
import { pizzaMenu } from 'helpers/queries';
import { fetch } from 'helpers/graphql';

export const FETCH_MENU = uniqueId('FETCH_MENU');
export const FETCHED_MENU = uniqueId('FETCHED_MENU');
export const FETCH_ERROR = uniqueId('FETCH_ERROR');
export const RESET_MENU = uniqueId('RESET_MENU');

function startFetchMenu() {
    return (dispatch) => {
        dispatch({
            type: FETCH_MENU,
        });
    };
}

function fetchedMenu(rawData) {
    return (dispatch) => {
        dispatch({
            type: FETCHED_MENU,
            payload: rawData,
        });
    };
}

function errorFetchingMenu(error) {
    return (dispatch) => {
        dispatch({
            type: FETCH_ERROR,
            payload: error,
        });
    };
}

function resetMenu() {
    return (dispatch) => {
        dispatch({
            type: RESET_MENU,
        });
    };
}

function fetchMenu() {
    return (dispatch) => {
        dispatch(startFetchMenu());
        fetch(pizzaMenu, null, null)
        .then((results) => {
            dispatch(fetchedMenu(results));
        })
        .catch(error =>
            dispatch(errorFetchingMenu(error.message || error)),
        );
    };
}

export default {
    resetMenu,
    fetchMenu,
};
