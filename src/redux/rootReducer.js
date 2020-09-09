import { combineReducers } from 'redux'
import empReducer from './empReducer'
// import userReducer from './user/userReducer'

const rootReducer = combineReducers({
empReducer
  // user: userReducer
})

export default rootReducer