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
    itemRemove(state,actions){
      let itemMatch = actions.payload
      state.value = state.value.filter(item => item.id !== itemMatch);  
    }
  },
})
export const { cartData, itemRemove } = addToCart.actions

export default addToCart.reducer