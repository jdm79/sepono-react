import React from 'react'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

import Home from './Home'
import About from './About'
import User from './User'

import './App.css'

const App = () => (
  <Router>
    <div>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/user'>User</Link></li>
      </ul>
      <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
      <Route path='/user' component={User} />
    </div>
  </Router>
)

export default App
