import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    currentPackage: "",
}

export const packageSlice = createSlice({
    name: 'packageSlice',
    initialState,
    reducers: {
        setPackage: (state, actions)  => {
            state.currentPackage = actions.payload;
        },
        resetPackage: () => initialState,

    },
})

// Action creators are generated for each case reducer function
const {reducer, actions} = packageSlice;
export const { setPackage, resetPackage } = actions;
export default reducer;