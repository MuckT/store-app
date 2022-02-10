import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartList: []
}

// TODO: Add action to handle editing quantity

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cartList.find(item => item.id === action.payload.id)
        ? state.cartList.map(item => item.id === action.payload.id ? item.quantity++ : item)
        : state.cartList.push({...action.payload, quantity: 1})
    },
    removeFromCart: (state, action) => {
      state.cartList = state.cartList.filter(item => item.id !== action.payload.id)
    }
  }
})

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart } = cartSlice.actions

export default cartSlice.reducer

