import { combineReducers } from "redux";
import CartOperations from "./CartOperations";
import UserLoginOperations from "./UserLoginsOpn";

 export default combineReducers({
    CartOperations,
    UserLoginOperations
 })