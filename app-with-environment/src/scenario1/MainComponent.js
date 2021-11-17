import React, {useState} from 'react'

import Tab1 from './Tab1'
import Tab2 from './Tab2'

import './scenario.css'
function MainComponent() {
    const [showTab1, setShowTab1] = useState(true);
    const [showTab2, setShowTab2] = useState(false);
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
            <div className="content">
                {showTab1 && <Tab1/>}
                {showTab2 && <Tab2/>}
            </div>
        </div>
    )
}

export default MainComponent
