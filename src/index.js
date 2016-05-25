import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, hashHistory,browserHistory } from 'react-router'

import App from './app.js'
import About from './Component/About.js'
import Customers from './Component/Users.js'
import Customer from './Component/User.js'

//TODO replace bashHistory with browserHistory
render((
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <Route path="about" component={About}/>
        <Route path="customers" component={Customers}>
          <Route path="customer/:id" component={Customer}/>
        </Route>
      </Route>
    </Router>
), document.getElementById('app'));

