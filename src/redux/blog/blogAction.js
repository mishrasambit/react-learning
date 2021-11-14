import axios from 'axios'
import {FETCH_BLOG_REQUEST, FETCH_BLOG_SUCCESS, FETCH_BLOG_FAILURE} from './blogActionType';

const fetchBlogRequest=()=>{
    return {
        type: FETCH_BLOG_REQUEST
    }
}

const fetchBlogSuccess=(blogdata)=>{
    return {
        type: FETCH_BLOG_SUCCESS,
        payload: blogdata
    }
}

const fetchBlogFailure=(error)=>{
    return {
        type: FETCH_BLOG_FAILURE,
        payload: error
    }
}

export const fetchBlog=()=>{
    return (dispatch)=>{
        dispatch(fetchBlogRequest);
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response=>{
            const blogs = response.data.map(blog=>blog.title)
            console.log('Users data:',blogs)
            dispatch(fetchBlogSuccess(blogs))
        }).catch(error=>{
            console.log('error message:',error.message)
            dispatch(fetchBlogFailure(error.message))
        })
    }
}
