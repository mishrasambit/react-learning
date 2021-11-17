


function Blog(props) {
    console.log(props);
    const {blogdata,other}= props;
    return (
        <div>
             this the blog
            <p>id :{blogdata.id} </p>
            <p>title :{blogdata.title} </p>
            <p>message :{blogdata.message} </p>

        </div>
    )
}

export default Blog;
