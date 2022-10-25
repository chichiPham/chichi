import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentPackage: '',
}

export const PackageSlice = createSlice({
  name: 'packageSlice',
  initialState,
  reducers: {
    setPackage: (state, action)=>{
        state.currentPackage=action.payload
    },
    resetPackage: ()=>initialState
  },
})

// Action creators are generated for each case reducer function
export const { setPackage, resetPackage} = PackageSlice.actions

export default PackageSlice.reducer