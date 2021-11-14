import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {fetchUsers} from '../redux/user/userAction'

function UserContainer(props) {
    // useEffect(()=>{
    //     props.fetchUsers()
    // },[])
    if(props.userdata.loading){
        return <h2>Loading...</h2>
    }else if(props.userdata.error){
        return <h2>{props.userdata.error}</h2>
    }
    return (
        <div>
            <h2>Users</h2><button onClick={props.fetchUsers}>getuser</button>
            {
                props.userdata.users.map(user=>(
                    <li>{user}</li>
                ))
            }
        </div>
    )
}
const mapStateToProps=(state)=>{
    return {
        userdata : state.user
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        fetchUsers : ()=>dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)
