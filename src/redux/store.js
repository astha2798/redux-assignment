import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import empReducer from './empReducer'

// import rootReducer from './rootReducer'

const store = createStore(
  empReducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
)

export default store