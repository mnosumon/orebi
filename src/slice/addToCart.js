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
    },
    itemIncrement(state,actions){
      let incrementIndex = actions.payload
      state.value[incrementIndex].quantity += 1
    },
    itemDecrement(state,actions){
      let decrementIndex = actions.payload
      if (state.value[decrementIndex].quantity > 1) {
        state.value[decrementIndex].quantity -= 1
      }
    },
  },
})
export const { cartData, itemRemove, itemIncrement, itemDecrement} = addToCart.actions

export default addToCart.reducer