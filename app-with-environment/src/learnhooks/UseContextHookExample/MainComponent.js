import React from 'react'

import ComponentA from './ComponentA'

export const AppContext = React.createContext();

function MainComponent() {
    return (
        <div>
            <AppContext.Provider value='Sambit'>
                <ComponentA/>
            </AppContext.Provider >
        </div>
    )
}

export default MainComponent
