import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './components/App.js'
import Home from './components/Home/index.js'
import About from './components/About/index.js'
import Contact from './components/Contact/index.js'
<<<<<<< HEAD
import Screening from './components/Screening/index.js'
=======
import Talk from './components/Talk/index.js'
>>>>>>> master

export default (
  <Route path='/' component={App}>
    <IndexRoute component={Home} />
    <Route path='/about' component={About} />
    <Route path='/contact' component={Contact} />
    <Route path='/screening' component={Screening} />
    <Route path='/talk' component={Talk} />
  </Route>
)
