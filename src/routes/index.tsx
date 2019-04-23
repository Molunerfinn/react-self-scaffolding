import React, { Suspense, lazy } from 'react'
import { Switch, Route } from 'react-router-dom'
import routes from './routes'

const Home = lazy(() => import('../pages/Home'))

function Routes (): JSX.Element {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route
          exact
          path={routes.ROOT.path}
          component={Home}
        />
      </Switch>
    </Suspense>
  )
}

export default Routes
