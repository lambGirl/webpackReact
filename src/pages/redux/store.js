/**
 *store 就是把所有的reducers及reducer, action,state等结合在一起
 */
import {createStore, applyMiddleware} from "redux";
import thunkMiddleware from "redux-thunk";
import combineReducers from './reducers';
let store =  createStore(combineReducers, applyMiddleware(thunkMiddleware));

export default store;

