import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import counterReducer from '../Counter/counterSlice'
import AsyncStorage from '@react-native-async-storage/async-storage'

const persistConfig = {
	key: "root",
	version: 1,
	storage: AsyncStorage,
}
const rootReducer = combineReducers({
	counter: counterReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  })
})
