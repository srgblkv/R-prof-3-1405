import React, { Component } from 'react';

import { Switch, Route } from 'react-router-dom'

import App from './components/App.jsx'
import UserProfile from './components/UserProfile/UserProfile.jsx'

class Router extends Component {
    render() {
        return (
            <Switch>
                <Route path = '/' component = { App } exact/>
                <Route path = '/chat/1/' render = { () => <App chatId = { 1 } /> } exact />
                <Route path = '/chat/2/' render = { () => <App chatId = { 2 } /> } exact />
                <Route path = '/profile/' component = { UserProfile } exact />
            </Switch>
        )
        
    }
}

export default Router;
