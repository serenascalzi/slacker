import React, {Component} from 'react'
import {register} from '../actions/chatActions'
import {Link} from 'react-router-dom'

class Register extends Component {

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
		register({
			username:this.state.username, 
			password:this.state.password
		})
		this.setState({
			username:'',
			password:''
		})
	}

	render() {
		return (
			<div className="container">
				<div>
					<h1><i className="fa fa-pied-piper-alt"></i> slacker</h1>
					<h2>Slacker Registration</h2>
					<form onSubmit={this.handleSubmit}>
						<div>
							<input type="text" name="username" value={this.state.username} onChange={this.handleChange} placeholder="Enter Username" autoComplete="off" />
						</div>
						<div>
							<input type="password" name="password" value={this.state.password} onChange={this.handleChange} placeholder="Enter Password" autoComplete="off" />
						</div>
						<div>
							<button type="submit">Register</button>
						</div>
					</form>
					<div className="links">
						<div><Link to={"/login"}>Log In</Link></div>
					</div>
				</div>
			</div>
		)
	}
}

export default Register
