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
      console.log(itemMatch);
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
    // calculateSubtotal: state => {
    //   let total = state.value.reduce((total, item) => total + item.price, 0);
    //   return total
    // }
    
  },
})
export const { cartData, itemRemove, itemIncrement, itemDecrement, calculateSubtotal} = addToCart.actions

export default addToCart.reducer