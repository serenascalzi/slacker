import React, {Component} from 'react'
import '../styles/App.css'
import {Provider} from 'react-redux'
import store from '../store'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Signin from './Signin'
import Chat from './Chat'
import Room2 from './Room2'
import Room3 from './Room3'
import Room4 from './Room4'

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Route exact path="/" component={Signin} />
            <Route path="/chat" component={Chat} />
            <Route path="/room2" component={Room2} />
            <Route path="/room3" component={Room3} />
            <Route path="/room4" component={Room4} />
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App
