import React from 'react'

function MainContent(props) {
    return (
        <div className="maincontent">
            <div className="leftcontent"></div>
            <div className="centercontent">{props.children}</div>
            <div className="rightcontent"></div>
        </div>
    )
}

export default MainContent
