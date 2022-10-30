import { createSlice } from '@reduxjs/toolkit'
import storage from '../../storage/storage';

const orderInfo = storage.getOrderInfoToJson();

const { orderId,  currentCity, newCity, movingDate, 
    isHasApartmentAlready, distance, paymentStatus } = orderInfo

const initialState = {

    orderId: orderId,
    plan: {},
    currentCity: currentCity,
    newCity: newCity,
    movingDate: movingDate,
    isHasApartmentAlready: isHasApartmentAlready,
    distance: distance,
    paymentStatus: paymentStatus,

    // payment_details: null,
    // payment_date: null,
    // status: '',
    // created_date: ''
}

export const orderSlice = createSlice({
    name: 'orderSlice',
    initialState,
    reducers: {
        setOrderId: (state, actions) => {
            state.orderId = actions.payload;
        },
        setOrderPlan: (state, actions) => {
            state.plan = actions.payload;
        },
        setOrderCurrentCity: (state, actions) => {
            state.currentCity = actions.payload;
        },
        setOrderNewCity: (state, actions) => {
            state.newCity = actions.payload;
        },
        setOrderMovingDate: (state, actions) => {
            state.movingDate = actions.payload;
        },

        setOrderDistance: (state, actions) => {
            state.distance = actions.payload
        },

        setOrderIsHasApartmentAlready: (state, actions) => {
            state.isHasApartmentAlready = actions.payload
        },

        setOrderPaymentStatus: (state, actions) => {
            // state.paymentStatus = actions.payload
            state.paymentStatus = actions.payload
        }

    },
})

// Action creators are generated for each case reducer function
const { actions } = orderSlice;
export const {
    setOrderId,
    setOrderPlan,
    setOrderCurrentCity,
    setOrderNewCity,
    setOrderMovingDate,
    setOrderDistance,
    setOrderIsHasApartmentAlready,
    setOrderPaymentStatus
} = actions;
