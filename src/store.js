import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './slice/counterSlice'
import addToCart from './slice/addToCart'

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    addCart: addToCart,
  },
})