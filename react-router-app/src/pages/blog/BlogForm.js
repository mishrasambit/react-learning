import React from 'react'
import  Header from '../component/Header'
import MainContent from '../component/MainContent'

function BlogForm() {
    return (
        <div className="blogconainer">
            <Header appname="BlogApp" 
                menu={[{link:'/blogs',text:'Blogs'},{link:'/blogForm',text:'Add Blog'}]}/>
            <MainContent>Form to add blog</MainContent>
        </div>
    )
}

export default BlogForm
