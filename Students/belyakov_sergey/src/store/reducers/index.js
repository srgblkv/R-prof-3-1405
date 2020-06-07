import {combineReducers} from 'redux'
import {connectRouter} from 'connected-react-router'

import roomReducer from './room-reducer'
import msgReducer from './messages-reducer'
import userReducer from './user-reducer'

export default (history) => combineReducers({
  router: connectRouter(history),
  roomReducer, msgReducer, userReducer
});