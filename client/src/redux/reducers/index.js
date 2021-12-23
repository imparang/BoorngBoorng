import { combineReducers } from 'redux'
import userReducer from './user'
import productReducer from './product'
import boardReducer from './board'
import cartReducer from './cart'

const rootReducer = combineReducers({
  user: userReducer,
  product: productReducer,
  board: boardReducer,
  cart: cartReducer
})

export default rootReducer
