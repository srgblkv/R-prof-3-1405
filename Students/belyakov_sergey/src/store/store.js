import {createStore, compose, applyMiddleware} from 'redux'
import {createBrowserHistory} from 'history'
import {routerMiddleware} from 'connected-react-router'

import initReducers from './reducers'
import middlewares from '../middlewares'

export const history = createBrowserHistory()

export function initStore() {
  const initialStore = {}

  return createStore(
    initReducers(history),
    initialStore,
    compose(
      applyMiddleware(routerMiddleware(history), ...middlewares),
      window.__REDUX_DEVTOOLS_EXTENSION__
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : () => {
        }
    ),
  )
}