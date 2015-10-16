import React from 'react'
import {Router, Route, Link} from 'react-router'

import Home from '../pages/Home'
import NoMatch from '../pages/NoMatch'

const routes = (
  <Route>
    <Route path="/" component={Home} />
    <Route path="*" component={NoMatch} />
  </Route>
)

export default routes
