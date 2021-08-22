import { FETCH_POSTS, NEW_POST } from './types';

export const fetchPosts = () => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        // .then((res) => console.log(res))
        // "res" is an array of objects
        // "res" contains 100Objects in an Array
        // "res" = {
            // body: "tum rerum est autem sunt rem eveniet architecto"
            // id: 1
            // title: "sun reprehenderit"
            // userId: 1
        // }
        // "res" is now "posts"
        .then(posts => 
            dispatch({
            // this is where the types.js file is being used... type: FETCH_POSTS
            type: FETCH_POSTS,
            payload: posts
            // "posts" is an array of 100objects
            })
        )
        // "posts" is an object
        // "posts" = {
            // type: "FETCH_POSTS",
            // payload: Array(100)
        // }
        // 
}

export const createPost = (postData) => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        body: JSON.stringify(postData),
        },)
        .then((res) => res.json())
        // "post" is an object 
        // "post" = {body: "This is the body", title: "Title", id: 101}
        // .then((post) => console.log(post))
        .then(post => dispatch({
            // this is where the types.js file is being used... type: NEW_POST
            type: NEW_POST,
            payload: post
            // "post" should be the object that is grabbed from the "res"
        }))
        // .then(console.log(this));
}

// Both postActions.js and types.js files are working together to create

// SIDE NOTE: TOO MANY ".then()" INSIDE THE FETCH WILL GIVE AN ERROR