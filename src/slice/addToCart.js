import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const addToCart = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    cartData: (state, actions) => {
      state.value = [...state.value,actions.payload]
    },
  },
})
export const { cartData } = addToCart.actions

export default addToCart.reducer