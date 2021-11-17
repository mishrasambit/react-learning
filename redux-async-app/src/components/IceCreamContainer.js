import React from 'react'
import {connect} from 'react-redux'
import {buyIcecream} from '../redux/icecream/icecreamAction'

function IceCreamContainer(props) {
    return (
        <div>
            <h1>Number of Icecream - {props.numOfIcecream} </h1>
            <button onClick={props.buyIcecream}>Buy Icecream</button>
        </div>
    )
}

const mapStateToProps=(state)=>{
    return {
        numOfIcecream : state.icecream.numOfIcecreams
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        buyIcecream : ()=>dispatch(buyIcecream())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer)
