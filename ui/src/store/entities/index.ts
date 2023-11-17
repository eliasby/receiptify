import { combineReducers } from 'redux'
import products from './products'
import receipt from './receipt'

export default combineReducers({
  products,
  receipt,
})
