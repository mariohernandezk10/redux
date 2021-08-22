import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import postReducer from './reducers'


const initialState = {};

const middeleware = [thunk];


// Do I need to add combineReducers() here instead og postReducer??
const store = createStore(
    postReducer,
    initialState,
    compose(
        applyMiddleware(...middeleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

// "compose()" is for REDUX DEVTOOLS

export default store;