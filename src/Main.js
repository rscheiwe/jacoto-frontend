import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home.js'
import About from './components/About.js'
import Browse from './components/Browse.js'
import Contact from './components/Contact.js'
// import About from './components/About.ks'
// import Schedule from './Schedule'

const Main = () => (
  <main>
      <Route exact path='/' component={Home}/>
      <Route path='/about' component={About}/>
      <Route path='/browse' component={Browse}/>
      <Route path='/contact' component={Contact}/>
  </main>
)

export default Main
