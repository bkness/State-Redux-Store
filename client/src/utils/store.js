import { createSlice, configureStore } from '@reduxjs/toolkit'
import reducer from './reducers'

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    products: [],
    cart: [],
    cartOpen: false,
    categories: [],
    currentCategory: '',
  },
  reducers: {
    ...reducer,
  } 
})

const store = configureStore({
  reducer: counterSlice.reducer
})

export default store;