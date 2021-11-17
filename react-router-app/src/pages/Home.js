import React,{useState, useContext} from 'react'
import {Link} from 'react-router-dom'
import {AppContext} from "../App"
function Home() {
    const appcontext = useContext(AppContext)
    const [message, setMessage] = useState('')
    const [about, setAbout] = useState('')
    const updateMessage=()=>{
        appcontext.appDispatch({
            type: 'UPDATE_MESSAGE',
            payload: message
        })
    }
    const updateAbout=()=>{
        appcontext.appDispatch({
            type: 'UPDATE_ABOUT',
            payload: about
        })
    }
    return (
        <div>
            <h2>Home</h2>
            My Home page!
            <div>
                <input type="text" value={message} placeholder="update message" onChange={(e)=>setMessage(e.target.value)}/>
                <button onClick={updateMessage}>update message</button>
            </div>
            <div>
                <input type="text" value={about} placeholder="update about" onChange={(e)=>setAbout(e.target.value)}/>
                <button onClick={updateAbout}>update about</button>
            </div>
            <p><Link to="/message">to Message</Link></p>
            <p><Link to="/about">to About</Link></p>
        </div>
    )
}

export default Home
