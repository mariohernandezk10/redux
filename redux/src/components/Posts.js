import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {fetchPosts} from '../actions/postActions';

class Posts extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         posts: []
    //     }
    // }

    // componentWillMount() {

    //     this._asyncRequest = 
    //     // URL should be inserted inside fetch from the API
    //     fetch('https://jsonplaceholder.typicode.com/posts/')
    //     .then(res => res.json())
    //     .then(data => {
    //         this._asyncRequest = null;
    //         this.setState({posts: data});
    //     })
    //     // .then(data => this.setState({posts: data}));
    // }

    // componentWillUnmount() {
    //     if(this._asyncRequest) {
    //         this._asyncRequest.cancel();
    //     }
    // }

    componentWillMount() {
        this.props.fetchPosts();
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.newPost) {
            this.props.posts.unshift(nextProps.newPost);
        }
    }

    render() {
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
    posts: PropTypes.array.isRequired
    // newPost: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    // "posts" refer to reducer
    posts: state.posts.items,
    newPost: state.posts.item
})


export default connect(mapStateToProps, {fetchPosts})(Posts);