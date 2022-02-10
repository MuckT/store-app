import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  activeCategory: {},
  categoryList: []
}

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    selectCategory: (state, action) => {
      state.activeCategory = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { selectCategory } = categoriesSlice.actions

export default categoriesSlice.reducer
