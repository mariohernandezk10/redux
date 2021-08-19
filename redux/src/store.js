import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';


const initialState = {};

const middeleware = [thunk];

const store = createStore(reducer, initialState, applyMiddleware(...middeleware))

export default store;