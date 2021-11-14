import React from 'react'
import {connect} from 'react-redux';
import {fetchBlog} from '../redux/blog/blogAction';

function UseComponent(props) {
    if(props.blogdata.loading){
        return <h1>Loading...</h1>
    }else if(props.blogdata.error){
        return <h1>{props.blogdata.error}</h1>
    }

    return (
        <div>
            User Component
            <button onClick={props.fetchBlog}>Fetch Blog POST</button>
            {
                props.blogdata.blogs.map((blog,index)=>(
                    <h4 key={index}>{blog}</h4>
                ))
            }
        </div>
    )
}

const mapStateToProps=(state)=>{
    return {
        blogdata: state.blog
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        fetchBlog : ()=>dispatch(fetchBlog())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UseComponent)
