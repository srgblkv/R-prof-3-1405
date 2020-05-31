import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './layout/style/main.css';

//redux
import { Provider } from 'react-redux';
import initStore from './store/store.js';

import { BrowserRouter } from 'react-router-dom'
import Router from './router.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

let container = document.getElementById('app')

let user = 'Loontik';

ReactDom.render(
    <BrowserRouter>
        <Provider store = { initStore() }>
            <MuiThemeProvider>
                <Router user={ user } />      
            </MuiThemeProvider>
        </Provider> 
    </BrowserRouter>
    ,
    container
)
