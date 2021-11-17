import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router'
import axios from 'axios'
import  Header from '../component/Header'
import  MainContent from '../component/MainContent'

function Blog(props) {
    const [blog, setBlog] = useState({})
    const params = useParams();
    console.log("blogId:", params)

    // useEffect(()=>{})//run after each render
    // useEffect(()=>{},[blog])//run after specific state data update
    // useEffect(()=>{},[])//runs only once

    useEffect(
        ()=>{
            console.log("for service call")
            let axioscancelsource = axios.CancelToken.source();
            getPostById(axioscancelsource);
            return () => {
                axioscancelsource.cancel("Cancelling in cleanup");
            }
        }
        ,[])
    useEffect(()=>{
        console.log("for blog update")
    },[blog])

    const getPostById = async (axioscancelsource)=>{
        try{
            const response = await axios.get(`http://localhost:3003/posts/${params.id}`,{
                //cancelToken:axioscancelsource
            })
            console.log(response)
            setBlog(response.data)
        }catch(e){
            console.log("error:",e)
        }        
    }
    
    return (
        <div className="blogconainer">
            <Header appname="BlogApp" 
                menu={[{link:'/blogs',text:'Blogs'},{link:'/blogForm',text:'Add Blog'}]}/>
            <MainContent>
                {/* {this.props.match.params.id} */}
                
                {
                    (blog.id!==undefined)?
                    <div className="blogdetail">
                        <div className="blog-title">{blog.title}</div>
                        <div className="blog-body">{blog.body}</div>
                    </div>
                    :<>Loading...</>
                }
            </MainContent>
        </div>
    )
}

export default Blog
