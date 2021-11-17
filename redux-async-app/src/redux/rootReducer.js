import { combineReducers } from "redux";
import cakeReducer from './cakes/cakeReducer'
import icecreamReducer from './icecream/icecreamReducer'
import userReducer from "./user/userReducer";
import blogReducer from "./blog/blogReducer";
const rootReducer = combineReducers({
    cake: cakeReducer,
    icecream: icecreamReducer,
    user: userReducer,
    blog: blogReducer
})

export default rootReducer