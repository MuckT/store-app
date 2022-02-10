import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import counterReducer from '../Counter/counterSlice'
import AsyncStorage from '@react-native-async-storage/async-storage'
import categoriesReducer from '../Categories/reducer'
import productsReducer from '../Products/reducer'

const persistConfig = {
	key: "root",
	version: 1,
	storage: AsyncStorage,
}
const rootReducer = combineReducers({
	counter: counterReducer,
  categories: categoriesReducer,
  products: productsReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  })
})
