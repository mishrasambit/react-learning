import React,{useContext} from 'react'
import {Link} from 'react-router-dom'

import {AppContext} from '../App'
function About() {
    const appContext = useContext(AppContext)
    return (
        <div>
            <h2>About</h2>
            {appContext.appState.about}
            <p><Link to="/">Back to Home</Link></p>
        </div>
    )
}

export default About
