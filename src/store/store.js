import {createStore,applyMiddleware} from  'redux';
import thunk from  'redux-thunk';
import allReducers from '../reducers/index';

const middleware = applyMiddleware(thunk);

export const store  = createStore(
    allReducers,
    middleware
);