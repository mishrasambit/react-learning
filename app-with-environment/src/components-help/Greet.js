import {useState} from 'react';
import axios from 'axios';

import Searchbar from './Searchbar';
import ImageList from './ImageList';
function Greet(){
    
    const [images, setImages] = useState([]);
    const onSearch= async (term)=>{
        const response = await axios.get('https://api.unsplash.com/search/photos', {
            params : {query: term},
            headers:{
                Authorization: 'Client-ID d68B_fq5WKPh6odPjqWgq4wirhfwTIPJq0y9bnCkvbg'
            }
        });
        console.log(response);
        setImages(response.data.results);
    }
    return <>
        <Searchbar onSubmit={onSearch}></Searchbar>
        <ImageList images={images}/>
    </>
}

export default Greet;