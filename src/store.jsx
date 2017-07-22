import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { reducers } from './views';

const createAsyncStore = compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : func => func,
)(createStore);

export default createAsyncStore(
    combineReducers(reducers),
);
