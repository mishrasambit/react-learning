import React, {useContext} from 'react'
import {CountContext} from './MainComponent'
function ComponentD() {
    const {countState, countDispatch} = useContext(CountContext)
    return (
        <div>
            Component - D  {countState}
            <button onClick={()=>countDispatch('increment')}>increment</button>
            <button onClick={()=>countDispatch('decrement')}>decrement</button>
            <button onClick={()=>countDispatch('reset')}>reset</button>
        </div>
    )
}

export default ComponentD
