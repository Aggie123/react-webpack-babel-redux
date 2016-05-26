import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, hashHistory,browserHistory } from 'react-router'

import './css/main.css'

import App from './app'
import About from './Component/About'
import Users from './Component/Users'
import User from './Component/User'

//TODO replace bashHistory with browserHistory
render((
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <Route path="about" component={About}/>
        <Route path="users" component={Users}>
          <Route path="user/:id" component={User}/>
        </Route>
      </Route>
    </Router>
), document.getElementById('app'));

