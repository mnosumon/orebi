import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
  cartTotal: 0,
}

export const addToCart = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    cartData: (state, actions) => {
      state.value = [...state.value,actions.payload]
      state.cartTotal = state.value.reduce((total, item) => total + item.productPrice, 0);
    },
    itemRemove(state,actions){
      let itemMatch = actions.payload
      state.value = state.value.filter(item => item.id !== itemMatch);  
      state.cartTotal = state.value.reduce((total, item) => total + item.productPrice, 0);
    },
    itemIncrement(state,actions){
      const incrementIndex = actions.payload
      state.value[incrementIndex].quantity += 1
      state.cartTotal = state.value.reduce((total, item) => total + item.productPrice * item.quantity, 0);
    },
    itemDecrement(state,actions){
      let decrementIndex = actions.payload
      if (state.value[decrementIndex].quantity > 1) {
        state.value[decrementIndex].quantity -= 1
      }
      state.cartTotal = state.value.reduce((total, item) => total + item.productPrice * item.quantity, 0);
    },
  },
})
export const { cartData, itemRemove, itemIncrement, itemDecrement} = addToCart.actions

export default addToCart.reducer