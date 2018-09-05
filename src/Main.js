import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from './Home.js'
import About from './components/About.js'
import Browse from './components/Browse.js'
import Contact from './components/Contact.js'
import Course from './components/Course.js'
import AdvancedSearch from './components/AdvancedSearch.js'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/courses/:id' component={Course}/>
      <Redirect from='/courses' to='/browse'/>
      <Route exact path='/browse/advanced' component={AdvancedSearch}/>
      <Route path='/browse' component={Browse}/>
      <Route path='/contact' component={Contact}/>
      <Route path='/about' component={About}/>
    </Switch>
  </main>
)

export default Main
