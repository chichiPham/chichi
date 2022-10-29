import { combineReducers } from "@reduxjs/toolkit";
import { logInUserSlice } from "./user/logInUserSlice";
import { packageSlice } from "./package/packageSlice";
import { orderSlice } from "./order/orderSlice";


const rootReducer = combineReducers({
    logInUser: logInUserSlice.reducer,
    package: packageSlice.reducer,
    order: orderSlice.reducer
})

export default rootReducer;