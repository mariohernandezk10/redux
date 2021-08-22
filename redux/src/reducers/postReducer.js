import {FETCH_POSTS, NEW_POST } from '../actions/types';

const initialState = {
    items: [],
    item: {}
};

export default function postReducer(state = initialState, action) {
    // the "action" parameter that is the same as dispatch
    // "action" = dispatch 
    switch(action.type) {
        case FETCH_POSTS:
            return {
                ...state,
                items: action.payload
                // "action.payload" is the array of 100 objects = all posts
            };
        case NEW_POST:
            return {
                ...state,
                item: action.payload
                // "action.payload" should be an object = single post
            };
            default:
            return state;
    }
}
