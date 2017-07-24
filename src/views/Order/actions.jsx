import { uniqueId } from 'lodash';
import { MOCK_DATA } from 'helpers/queries';

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
    }
}

function fetchMenu() {
    return (dispatch) => {
        dispatch(startFetchMenu());
        return new Promise((resolve, reject) => {
            dispatch(fetchedMenu(MOCK_DATA));
            return resolve();
        });
    }
}

export default {
    resetMenu,
    fetchMenu,
};

// import { pizzaMenu } from 'helpers/queries';
// import { fetch } from 'helpers/graphql';


// function getData() {
//     // return (dispatch) => {
//        fetch(pizzaMenu, null, null).then(function (results) {
//             debugger;
//             if (results.errors) {
//             //... 
//             return
//             }
//           var user = result.data.user
//           //... 
//         });
//     // };
// }

// getData();

// export {
//     getData,
// }