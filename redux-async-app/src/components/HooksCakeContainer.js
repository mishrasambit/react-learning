import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {buyCake} from '../redux/cakes/cakeAction'

function HooksCakeContainer() {
    const numOfCakes = useSelector(state => state.cake.numOfCakes)
    const dispatch = useDispatch()
    return (
        <div>
            <h1>Num of cakes - {numOfCakes}</h1>
            <button onClick={()=>dispatch(buyCake())}>buy cake</button>
        </div>
    )
}

export default HooksCakeContainer