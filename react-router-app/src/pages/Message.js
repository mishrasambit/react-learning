import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import {AppContext} from '../App'
function Message() {
    const appContext = useContext(AppContext)
    return (
        <div>
            <h2>Messages</h2>
            {appContext.appState.message}
            <p><Link to="/">Back to Home</Link></p>
        </div>
    )
}

export default Message
