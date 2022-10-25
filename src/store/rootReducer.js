import {combineReducers} from "@reduxjs/toolkit";
import {logInUserSlice} from "./user/logInUserSlice";
import { PackageSlice } from "./package/packageSlice";

const rootReducer = combineReducers({
    logInUser: logInUserSlice.reducer,
    package: PackageSlice.reducer

})

export default rootReducer;