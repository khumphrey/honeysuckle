import * as React from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'
import {Home} from './components'

/**
 * COMPONENT
 */
const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={Home} />
    </Switch>
  )
}

/**
 * CONTAINER
 */

export default withRouter(connect(null, null)(Routes))
