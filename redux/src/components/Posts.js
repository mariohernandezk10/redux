import React, { Component } from 'react'

class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }

    componentWillMount() {
        // URL should be inserted inside fetch from the API
        fetch('https://jsonplaceholder.typeicode.com/posts')
        .then(res => res.json())
        .then(data => this.setState({posts: data}));
    }

    render() {
        const postItems = this.state.posts.map(post => (
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        ))
        console.log(postItems);

        return (
            <div>
                <h1>Posts</h1>
                {postItems}
            </div>
        )
    }
}

export default Posts;