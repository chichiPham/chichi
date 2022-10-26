import {combineReducers} from "@reduxjs/toolkit";
import {logInUserSlice} from "./user/logInUserSlice";
import {packageSlice} from "./package/packageSlice";


const rootReducer = combineReducers({
    logInUser: logInUserSlice.reducer,
    package: packageSlice.reducer,
})

export default rootReducer;