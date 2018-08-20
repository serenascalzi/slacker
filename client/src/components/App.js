import React, {Component} from 'react'
import '../styles/App.css'
import {Provider} from 'react-redux'
import store from '../store'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Signin from './Signin'
import Chat from './Chat'
//import Login from './Login'
//import AuthRoute from './AuthRoute'

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Route exact path="/" component={Signin} />
            <Route path="/chat" component={Chat} />
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App

/*<div>
  <Route exact path="/" render={() => <Redirect to="/chat" />} />
  <Route exact path="/login" component={Login} />
  <AuthRoute path="/chat" component={Chat} />
</div>*/
