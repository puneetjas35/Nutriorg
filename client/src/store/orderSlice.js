import { createSlice } from "@reduxjs/toolkit";

const intialValue = {
    order : []
}

const orderSlice = createSlice({
    name : "order",
    initialState :intialValue,
    reducers : {
        setOrder : (state,action)=>{
            state.order = Array.isArray(action.payload) ? action.payload : []
        }
    }
})

export const {setOrder} = orderSlice.actions

export default orderSlice.reducer