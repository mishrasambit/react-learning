import React, {useContext} from 'react'
import {BlogContext} from './MainComponent';
const blog={
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  }

  

function Tab2() {
    const {blogState, blogDispatch} = useContext(BlogContext);
    return (
        <div>
            <h1> Scenario2 Tab 2</h1>
            <p>ID: {blogState.post.id}</p>
            <p>title: {blogState.post.title}</p>
            <p>message: {blogState.post.body}</p>
        </div>
    )
}

export default Tab2
