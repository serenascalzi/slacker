import React, {Component} from 'react'
import {addUser} from '../actions/chatActions'
import {withAuth} from '../lib/Authentication'
import {Redirect, Link} from 'react-router-dom'

class Login extends Component {

  state = {
    username: '',
    password: '',
    redirectToReferrer: false
  }

  handleChange = e => {
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  login = (e) => {
    e.preventDefault()
    this.props.signin(this.state.username, this.state.password, () => {
      this.setState({ redirectToReferrer: true })
    })
    addUser(this.state.username)
  }

  logout = () => {
    this.props.signout()
  }

  render() {
    //const { from } = this.props.location.state || { from: {pathname: this.props.defaultRedirect }}
    const { redirectToReferrer } = this.state

    if (redirectToReferrer) {
      return <Redirect to="/chat" />
    } else {
      return (
        <div className="container">
          <div>
            <h1><i className="fa fa-pied-piper-alt"></i> slacker</h1>
            <h2>Slacker Log In</h2>
            <form onSubmit={this.login}>
              <div>
                <input type="text" name="username" value={this.state.username} onChange={this.handleChange} placeholder="Enter Username" autoComplete="off" />
              </div>
              <div>
                <input type="password" name="password" value={this.state.password} onChange={this.handleChange} placeholder="Enter Password" autoComplete="off" />
              </div>
              <div>
                <button type="submit">Log In</button>
              </div>
            </form>
            <h3>New to Slacker? <Link to={"/register"}>Register Now!</Link></h3>
          </div>
        </div>
      )
    }
  }
}

export default withAuth(Login)
