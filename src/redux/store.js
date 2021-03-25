import { createStore, applyMiddleware } from 'redux'
import rootReducer from './rootReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk, logger))
)

export default store
