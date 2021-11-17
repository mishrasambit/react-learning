import {FETCH_BLOG_REQUEST, FETCH_BLOG_SUCCESS, FETCH_BLOG_FAILURE} from './blogActionType';

const initialState = {
    loading: false,
    blogs:[],
    error: undefined
}

const blogReducer =(state=initialState, action)=>{
    switch(action.type){
        case FETCH_BLOG_REQUEST : return {...state, loading: true}
        case FETCH_BLOG_SUCCESS : return {...state, loading:false, 
            blogs: action.payload, error:undefined}
        case FETCH_BLOG_FAILURE: return {...state, loading:false, 
            blogs: [], error:action.payload}
        default : return state
    }
}

export default blogReducer;