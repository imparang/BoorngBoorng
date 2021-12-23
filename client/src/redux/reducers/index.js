import { combineReducers } from 'redux'
import userReducer from './user'
import productReducer from './product'
import boardReducer from './board'
import cartReducer from './cart'
import orderReducer from './order'

const rootReducer = combineReducers({
  user: userReducer,
  product: productReducer,
  board: boardReducer,
  cart: cartReducer,
  order: orderReducer
})

export default rootReducer
