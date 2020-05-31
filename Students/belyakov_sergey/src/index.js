import React from 'react'
import ReactDom from 'react-dom'

import {Provider} from 'react-redux'
import initStore from './store/store.js'

import CssBaseline from '@material-ui/core/CssBaseline';

import './layout/style/main.css'

import App from './components/App.jsx'

ReactDom.render(
  <Provider store={initStore()}>
    <CssBaseline>
      <App/>
    </CssBaseline>
  </Provider>,
  document.querySelector('#app')
)