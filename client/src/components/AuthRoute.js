import React, {Component} from 'react'
import {Route, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'

class AuthRoute extends Component {
  render () {
    const redirectURL = '/login'

    if (this.props.isAuthenticated) {
      return <Route {...this.props} />
    } else {
      return <Redirect to={redirectURL} />
    }
  }
}

function mapStateToProps (appstate) {
  return {
    isAuthenticated: appstate.authReducer.isAuthenticated
  }
}

export default connect(mapStateToProps)(AuthRoute)
