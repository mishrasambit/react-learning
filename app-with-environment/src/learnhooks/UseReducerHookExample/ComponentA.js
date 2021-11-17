import React, {useContext} from 'react'

import {CountContext} from './MainComponent'

function ComponentA() {
    const {countState, countDispatch} = useContext(CountContext);
    return (
        <div>
            Component - A  {countState}
            <button onClick={()=>countDispatch('increment')}>increment</button>
            <button onClick={()=>countDispatch('decrement')}>decrement</button>
            <button onClick={()=>countDispatch('reset')}>reset</button>
        </div>
    )
}

export default ComponentA
