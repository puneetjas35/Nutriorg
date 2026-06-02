import { configureStore } from '@reduxjs/toolkit'
import userReducer  from './userSlice'
import cartReducer from "./cartProduct"
import addressReducer from './addressSlice'
import orderReducer from "./orderSlice"

export const store = configureStore({
  reducer: {
    user : userReducer,
    cartItem : cartReducer,
    addresses : addressReducer,
    orders : orderReducer
  },
})  
