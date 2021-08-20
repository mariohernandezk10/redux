import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {createPost} from '../actions/postActions';

class Postform extends Component {
    constructor(props) {
        super(props);
        
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    onSubmit(e) {
        // prevent the default action?
        e.preventDefault();

        // const post = {
        //     title: this.state.title,
        //     body: this.state.body
        // }
        // I need to stringify this "post" object 

        // fetch('https://jsonplaceholder.typicode.com/posts', {
        // method: 'POST',
        // headers: {
        //     'Content-type': 'application/json; charset=UTF-8',
        //   },
        // body: JSON.stringify(post),
        // })
        // .then((res) => res.json())
        // .then(data => console.log(data));
        // console.log(this.props);
        // console.log(this.props.createPost({
        //     title: "HELLO",
        //     body: "WELCOME"
        // }));

        // console.log(createPost(e));
        // console.log(createPost(this.state));
        // this.props.createPost({
        //     title: "HELLO",
        //     body: "WELCOME"
        // });
    }

    componentWillMount() {
        console.log(this.props);
        this.props.createPost();
    }

    // componentWillReceiveProps(nextProps) {
    //     if(nextProps.newPost) {
    //         this.props.posts.unshift(nextProps.newPost);
    //     }
    // }

    render() {
        return (
            <div>
                <h1>Add Post</h1>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>Title: </label><br />
                        <input type="text" name="title" onChange={this.onChange} value={this.props.title}/>
                    </div>
                    <br />
                    <div>
                        <label>Body: </label><br />
                        <textarea name="body" onChange={this.onChange} value={this.props.body}/>
                    </div>
                    <br />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

Postform.propTypes = {
    createPost: PropTypes.func.isRequired,
    // newPost: PropTypes.object.isRequired
}

// need to pass the current state here
const mapStateToProps = state => ({
    posts: state.posts.items,
    newPost: state.posts.item
})

export default connect(mapStateToProps, {createPost})(Postform);