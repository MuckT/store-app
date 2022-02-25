import { createSlice } from '@reduxjs/toolkit'
import { categories } from '../data/categories'

const initialState = {
  activeCategory: {},
  categoryList: categories
}

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    selectCategory: (state, action) => {
      state.activeCategory = action.payload
    },
    reloadCategories(state) {
      Object.assign(state.categoryList, initialState.categoryList)
    }
  },
})

// Action creators are generated for each case reducer function
export const { selectCategory, reloadCategories } = categoriesSlice.actions

export default categoriesSlice.reducer
