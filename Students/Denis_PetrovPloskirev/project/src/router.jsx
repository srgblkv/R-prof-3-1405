import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Layout from './components/Layout/Layout.jsx';
import Profile from './components/Profile/Profile.jsx';
import NotPage from './components/404/404.jsx';

export default class Router extends React.Component {
  render() {
    return (
      <Switch>
        <Route path = '/' render = { () => <Profile /> } exact />
        <Route path = '/chat/1/' render = { () => <Layout chatName="Mark Zuckerberg" /> } exact />
        <Route path = '/chat/2/' render = { () => <Layout chatName="John Doe" /> } exact />
        <Route path = '/chat/3/' render = { () => <Layout chatName="Bill Gates" /> } exact />
        <Route path = '/chat/4/' render = { () => <Layout chatName="Steve Jobs" /> } exact />
        <Route path = '/chat/5/' render = { () => <Layout chatName="Pavel Durov" /> } exact />
        <Route path = '/profile/' render = { () => <Profile /> } exact />
        <Route path = '/p404/' render = { () => <NotPage type='404' /> } exact />
        <Route path = '/exit/' render = { () => <NotPage type="exit" /> } exact />
      </Switch>
    )
  }
}