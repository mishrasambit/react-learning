import React, {useContext} from 'react'

import ComponentC from './ComponentC'
import {AppContext} from './MainComponent';

function ComponentB() {
    const user = useContext(AppContext);
    
    return (
        <div>
            {user}
            <ComponentC/>
        </div>
    )
}

export default ComponentB
