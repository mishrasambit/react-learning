import {Link} from 'react-router-dom'

function Header(props){
    return (
        <div className="appheader">
            <div className="logo">
                {props.appname}
            </div>
            <div className="headermenu">
                {
                    props.menu.map(
                        (menuitem)=>(
                            <Link key={menuitem.text} to={menuitem.link}>{menuitem.text}</Link>
                        )
                    )
                }
                
            </div>
        </div>
    )
}

export default Header