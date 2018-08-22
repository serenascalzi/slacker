import React, {Component} from 'react'
import '../styles/App.css'
import {Provider} from 'react-redux'
import store from '../store'
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'
import {Authentication, AuthRoute} from '../lib/Authentication'
import Register from './Register'
import Login from './Login'
import Chat from './Chat'
import Room2 from './Room2'
import Room3 from './Room3'
import Room4 from './Room4'

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <Router>
          <Authentication
            redirectUrl='/login'
            defaultRedirect='/chat'
          >
            <div>
              <Route exact path="/" render={() => (
                <Redirect to="/login" />
              )} />
              <Route path="/register" component={Register} />
              <Route path="/login" component={Login} />
              <AuthRoute path="/chat" component={Chat} />
              <AuthRoute path="/room2" component={Room2} />
              <AuthRoute path="/room3" component={Room3} />
              <AuthRoute path="/room4" component={Room4} />
            </div>
          </Authentication>
        </Router>
      </Provider>
    )
  }
}

export default App
