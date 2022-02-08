import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  activeProduct: {},
  productList: []
}

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    selectProduct: (state, action) => {
      state.activeProduct = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { selectProduct } = productSlice.actions

export default productSlice.reducer
