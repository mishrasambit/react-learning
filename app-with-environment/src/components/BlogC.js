import React from 'react'

export class BlogC extends React.Component {
    render() {
        console.log(this.props)
        if(!this.props.blogdata){
            return <h3>Loading...</h3>
        }
        return (
            <div>
                <div>
             this the blog
            <p>id :{this.props.blogdata.id} </p>
            <p>title :{this.props.blogdata.title} </p>
            <p>message :{this.props.blogdata.message} </p>
            </div>
            </div>
        )
    }
}

export default BlogC
