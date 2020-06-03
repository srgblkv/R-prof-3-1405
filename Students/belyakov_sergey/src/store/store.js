import {createStore} from 'redux'

import initReducers from './reducers'

export default function initStore() {
  const initialStore = {};

  return createStore(
    initReducers,
    initialStore
  )
}