import React from 'react'
import ReactDom from 'react-dom'
import {Provider} from 'react-redux'
import {ConnectedRouter} from 'connected-react-router'

import {initStore, history} from './store/store.js'

import CssBaseline from '@material-ui/core/CssBaseline';

import './layout/style/main.css'

import Router from './router.jsx'

ReactDom.render(
  <Provider store={initStore()}>
    <ConnectedRouter history={history}>
      <CssBaseline>
        <Router/>
      </CssBaseline>
    </ConnectedRouter>
  </Provider>

  , document.querySelector('#app')
)