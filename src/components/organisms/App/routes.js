import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { HomePage } from 'pages'

// Auth
const requireAuth = (nextState, replace) => {
  let user = {}
  if (!user) {
    replace({ pathname: `/login`, state: { nextPathname: nextState.location.pathname } })
  }

  return true
}

const AppRoutes = () => (
  <Switch>
    <Route path='/' component={HomePage} onEnter={requireAuth} exact />
  </Switch>
)

export default AppRoutes
