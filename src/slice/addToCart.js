import { createSlice } from '@reduxjs/toolkit'

export const addToCart = createSlice({
  name: 'cart',
  initialState: {
    value: [],
  },
  reducers: {
    addCart: (state, actions) => {
        state.value = [...state.value, actions.payload]
        
    }
  },
})

export const { addCart } = addToCart.actions

export default addToCart.reducer;
