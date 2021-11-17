import React,{useState} from 'react'

function Searchbar(props) {
    const [term, setTerm] = useState('');
    const onFormSubmit=(e)=>{
        e.preventDefault();
        console.log("term",term);
        //props.onSubmit(term);
    }
    return (
        <div>
            <form onSubmit={onFormSubmit}>
                <label htmlFor="search">Image Search</label>                
                <input type="text" value={term} placeholder="search here" onClick={(e)=>console.log("search box click")} onChange={(e)=>setTerm(e.target.value)} />
            </form>
        </div>
    )
}


export default Searchbar;
