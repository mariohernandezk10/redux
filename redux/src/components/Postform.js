import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {createPost} from '../actions/postActions';

class Postform extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            body: ""
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    onSubmit(e) {
        // prevent the default action?
        e.preventDefault();

        // Created "post" using "this.state"
        const post = {
            title: this.state.title,
            body: this.state.body
        }
        // grabs the createPost function and uses the "post" const
        this.props.createPost(post);
        // "this.props" is an object with posts, newPosts, createPost
        // "this.props" = {posts: [{}], newPost: {}, createPost: fx
        
    }

    render() {
        // it's common for CSS classes to depend on the component props or state

        // let className = "menu";
        // if(this.props.isActive) {
        //     className += ' menu-active';
        // }

        // Using this:
        
        // return <span className={className}>Menu</span>
        
        return (
            <div className="form-container">
                <h1>Add Post</h1>
                <form onSubmit={this.onSubmit} action="action_page.php">
                    <div className="row">
                        <div className="col-25">
                            <label>Title: </label>
                        </div>
                        <br />
                        <div  className="col-75">
                            <input type="text" name="title" onChange={this.onChange} value={this.props.title}/>
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="col-25">
                            <label>Body: </label>
                        </div>
                        <br />
                        <div className="col-75">
                            <textarea name="body" onChange={this.onChange} value={this.props.body}/>
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

// tests the "Postform" class using the "prop-types" npm package on line 2
Postform.propTypes = {
    createPost: PropTypes.func.isRequired
}
// will give an error if createPost is not a function, etc

export default connect(null, {createPost})(Postform);