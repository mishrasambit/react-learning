import React, {useState, useContext} from 'react'
import axios from 'axios';
import {BlogContext} from './MainComponent';

import {POST_REMOTE_ENDPOINT_URL} from '../config'

function Tab1() {
    const [term, setTerm] =  useState('');
    const {blogState, blogDispatch} = useContext(BlogContext);

    const fetchBlog = async ()=>{
        try{
            const response = await axios.get(`${POST_REMOTE_ENDPOINT_URL}/posts/${term}`);
            console.log(response);
            blogDispatch({type: 'FETCH_SUCCESS', payload: response.data});
        }catch(e){
            blogDispatch({type: 'FETCH_ERROR'});
        }
    }
    return (
        <div>
            <h1> Scenario2 Tab 1</h1>
            <input type="text" placeholder="Search Here" onChange={(e)=>setTerm(e.target.value)}/>
            <button onClick={fetchBlog}>search</button>
            { 
                (blogState.post===undefined || blogState.post.title===undefined) 
                    ?<div>Searching...</div> 
                    :<div>
                        <p>ID: {blogState.post.id}</p>
                        <p>title: {blogState.post.title}</p>
                        <p>message: {blogState.post.body}</p>
                    </div>
            }
        </div>
    )
}

export default Tab1
