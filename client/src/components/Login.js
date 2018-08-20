import React, {Component} from 'react'
import {login} from '../actions/chatActions'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'

class Login extends Component {

	state = {
		username:'',
		password:''
	}

	handleChange = e => {
		this.setState({
			[e.target.name]:e.target.value
		})
	}

	handleSubmit = e => {
		e.preventDefault()
		login(this.state.username, this.state.password)
	}

	render() {
		if (this.props.isAuthenticated) {
			return <Redirect to="/chat" />
		} else {
			return (
				<div className="container">
					<div>
						<h1><i className="fa fa-pied-piper-alt"></i> slacker</h1>
						<form onSubmit={this.handleSubmit}>
							<div>
								<input type="text" name="username" value={this.state.username} onChange={this.handleChange} placeholder="Enter Username" />
							</div>
							<div>
								<input type="password" name="password" value={this.state.password} onChange={this.handleChange} placeholder="Enter Password" />
							</div>
							<div>
								<button type="submit">Login</button>
							</div>
						</form>
					</div>
				</div>
			)
		}
	}
}

function mapStateToProps(appstate) {
	return {
		isAuthenticated:appstate.authReducer.isAuthenticated
	}
}

export default connect(mapStateToProps)(Login)
