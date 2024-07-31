import { legacy_createStore } from "redux";
import RootReducer from './Reducers/RootReducers'

const store = legacy_createStore(RootReducer);
export default store