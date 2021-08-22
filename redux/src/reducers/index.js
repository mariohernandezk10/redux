import { combineReducers } from 'redux';
import postReducer from './postReducer';

export default combineReducers({
    // "posts" refers to "state.posts" in the mapToStateProps
    posts: postReducer
})

// const mapStateToProps = state => ({
    //     posts: state.posts.items,
    //     newPost: state.posts.item
// })
