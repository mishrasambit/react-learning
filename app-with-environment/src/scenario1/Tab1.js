import React, {useState} from 'react'
import axios from 'axios';

import {POST_URL_ENDPOINT} from '../config'

function Tab1() {
    const [term, setTerm] =  useState('');
    const [blog, setBlog] =  useState({});
    const fetchBlog = async ()=>{
        const response = await axios.get(`${POST_URL_ENDPOINT}/posts/${term}`);
        console.log(response);
        setBlog(response.data);
    }
    return (
        <div>
            <h1>Tab 1</h1>
            <input type="text" placeholder="Search Here" 
                    onChange={(e)=>setTerm(e.target.value)}/>
            <button onClick={fetchBlog}>search</button>
            { 
                (blog===undefined || blog.title===undefined) 
                    ?<div>Searching...</div> 
                    :<div>
                        <p>ID: {blog.id}</p>
                        <p>title: {blog.title}</p>
                        <p>message: {blog.body}</p>
                    </div>
            }
        </div>
    )
}

export default Tab1
