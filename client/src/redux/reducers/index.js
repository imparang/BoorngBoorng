import { combineReducers } from 'redux'
import userReducer from './user'
import productReducer from './product'
import boardReducer from './board'

const rootReducer = combineReducers({
  user: userReducer,
  product: productReducer,
  board: boardReducer
})

export default rootReducer
