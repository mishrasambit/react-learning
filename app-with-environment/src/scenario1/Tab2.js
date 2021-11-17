import React from 'react'

const blog={
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  }

function Tab2() {
    return (
        <div>
            <h1>Tab 2</h1>
            <p>ID: {blog.id}</p>
            <p>title: {blog.title}</p>
            <p>message: {blog.body}</p>
        </div>
    )
}

export default Tab2
