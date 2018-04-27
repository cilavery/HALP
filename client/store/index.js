import {createStore, combineReducers, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import user from './user'
import decision from './decision'
import posPoint from './posPoints'
import conPoint from './conPoints'


const reducer = combineReducers({
  user,
  decision,
  posPoint,
  conPoint
})

const middleware = composeWithDevTools(applyMiddleware(
  thunkMiddleware,
  createLogger({collapsed: true})
))
const store = createStore(reducer, middleware)

export default store
export * from './user'
export * from './decision'
export * from './posPoints'
export * from './conPoints'
