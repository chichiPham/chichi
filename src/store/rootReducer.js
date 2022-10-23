import {combineReducers} from "@reduxjs/toolkit";
import {logInUserSlice} from "./user/logInUserSlice";


const rootReducer = combineReducers({
    logInUser: logInUserSlice.reducer,

})

export default rootReducer;