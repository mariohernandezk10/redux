import React, { Component } from 'react';

class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }

    componentWillMount() {

        this._asyncRequest = 
        // URL should be inserted inside fetch from the API
        fetch('https://jsonplaceholder.typicode.com/posts/')
        .then(res => res.json())
        .then(data => {
            this._asyncRequest = null;
            this.setState({posts: data});
        })
        // .then(data => this.setState({posts: data}));
    }

    componentWillUnmount() {
        if(this._asyncRequest) {
            this._asyncRequest.cancel();
        }
    }

    render() {
        if(this.state.data === null) {
            return (
                <div>
                    <h1>Posts</h1>
                </div>
            )
        
        } else {
            const postItems = this.state.posts.map(post => (
                <div key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </div>
            ))
            return (
                <div>
                    <h1>Posts</h1>
                    {postItems}
                </div>
            )
        }

    }
}

export default Posts;