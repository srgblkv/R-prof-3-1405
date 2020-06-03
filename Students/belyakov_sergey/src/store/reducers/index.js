import {combineReducers} from 'redux'
import roomReducer from './room-reducer'
import msgReducer from './messages-reducer'

export default combineReducers({
  roomReducer, msgReducer
});