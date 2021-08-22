import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {fetchPosts} from '../actions/postActions';

class Posts extends Component {

    componentDidMount() {
        this.props.fetchPosts();
    }

    // When the componenet receives a new prop, this function below will run
    componentDidUpdate(nextProps) {
        // the if statement checks if there is an incoming prop, then adds it to the array of 100 objects
        if(nextProps.newPost) {
            this.props.posts.unshift(nextProps.newPost);
            // "unshift" adds to the front of the array
            // "push" adds to the end of the array
        }
    }

    render() {
        // "this.state" to "this.props" due to mapStateToProps function
        const postItems = this.props.posts.map(post => (
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        ));
        return (
            <div>
                <h1>Posts</h1>
                {postItems}
            </div>
        )
    }
}

Posts.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    newPost: PropTypes.object.isRequired
}

// need to pass the current state here
// refer to "mapStateToProps section": https://react-redux.js.org/api/connect
// Your mapStateToProps function will be called whenever the store state changes, and given the store state as the only parameter.
const mapStateToProps = state => ({
    // "state.posts" refer to "items" under FETCH_POSTS, which is the array of objects
    posts: state.posts.items,
    // new incoming post from "postReducer.js" under NEW_POST under item
    newPost: state.posts.item
})


export default connect(mapStateToProps, {fetchPosts})(Posts);