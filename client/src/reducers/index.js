import { combineReducers } from "redux";
import authReducer from "./authReducer";

// the object here represents keys in the state object
export default combineReducers({
    auth: authReducer
});