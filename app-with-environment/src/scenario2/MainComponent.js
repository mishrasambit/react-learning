import React, {useState, useReducer, useEffect} from 'react'

import Tab1 from './Tab1'
import Tab2 from './Tab2'

import './scenario.css'

const initialState={
    loading: true,
    error: '',
    post: {}
}
const reducer =(state, action)=>{
    switch(action.type){
        case 'FETCH_SUCCESS':
            return {
                loading: false,
                post: action.payload,
                error: ''
            }
        case 'FETCH_ERROR':
            return {
                loading: false,
                post: {},
                error: 'Something went wrong!'
            }
        default:
            return state
    }
}

export const BlogContext = React.createContext();

function MainComponent() {
    const [showTab1, setShowTab1] = useState(true);
    const [showTab2, setShowTab2] = useState(false);
    const [state, dispatch] = useReducer(reducer, initialState);

    const activateTab1 = ()=>{
        setShowTab2(false);
        setShowTab1(true);
    }
    const activateTab2 = ()=>{
        setShowTab1(false);
        setShowTab2(true);
    }
    return (
        <div className="main-container">
            <div className="header">
                <div className="logo">MainComponent</div>    
                <div className="tabs-menu">
                    <div className="menu" onClick={activateTab1}>tab1</div>
                    <div className="menu" onClick={activateTab2}>tab2</div>
                </div>    
            </div>
            <BlogContext.Provider value={{blogState: state, blogDispatch: dispatch}}>
                <div className="content">
                    {showTab1 && <Tab1/>}
                    {showTab2 && <Tab2/>}
                </div>
            </BlogContext.Provider>
        </div>
    )
}

export default MainComponent
