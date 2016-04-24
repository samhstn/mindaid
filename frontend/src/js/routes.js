import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './components/App.js'
import Home from './components/Home/index.js'
import About from './components/About/index.js'
import Contact from './components/Contact/index.js'
import Screening from './components/Screening/index.js'
import Listen from './components/Listen/index.js'
import Learn from './components/Learn/index.js'
import Anxiety from './components/Anxiety/index.js'
import Behaviour from './components/Behaviour/index.js'
import Depression from './components/Depression/index.js'
import SelfHarm from './components/SelfHarm/index.js'
import Refer from './components/Refer/index.js'
import Remind from './components/Remind/index.js'

export default (
  <Route path='/' component={App}>
    <IndexRoute component={Home} />
    <Route path='/about' component={About} />
    <Route path='/contact' component={Contact} />
    <Route path='/screening' component={Screening} />
    <Route path='/listen' component={Listen} />
    <Route path='/learn' component={Learn} />
    <Route path='/anxiety' component={Anxiety} />
    <Route path='/behaviour' component={Behaviour} />
    <Route path='/depression' component={Depression} />
    <Route path='/self-harm' component={SelfHarm} />
    <Route path='/refer' component={Refer} />
    <Route path='/remind' component={Remind} />
  </Route>
)
