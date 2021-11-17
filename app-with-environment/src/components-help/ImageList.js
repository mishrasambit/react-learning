import React from 'react'

function ImageList(props) {
    if(props.images.length===0){
        return <p>Loading...</p>
    }
    return (
        <div className="photo-galary">
            {props.images.map((image)=>(
                <div key={image.id}>
                    <img src={image.urls.thumb}/>
                </div>
            ))}
        </div>
    )
}

export default ImageList
