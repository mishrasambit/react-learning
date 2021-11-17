import React from 'react'

import {AppContext} from './MainComponent'
function ComponentC() {
    return (
        <div>
            data from c
            <AppContext.Consumer >
                {
                    username => {
                        return <p>
                            User name is {username}
                        </p>
                    }
                }
            </AppContext.Consumer>
            
        </div>
    )
}

export default ComponentC
