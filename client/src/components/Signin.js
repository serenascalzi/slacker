import React, {Component} from 'react'
import {signin} from '../actions/chatActions'

class Signin extends Component {

	state = {
		username:''
	}

	handleChange = e => {
		this.setState({
			[e.target.name]:e.target.value
		})
	}

	handleSubmit = e => {
		signin(this.state.username)
		this.props.history.push('./chat')
	}

	render() {
		return (
			<div className="container">
				<div>
					<h1><i className="fa fa-pied-piper-alt"></i> slacker</h1>
					<form onSubmit={this.handleSubmit}>
						<div>
							<input type="text" name="username" value={this.state.username} onChange={this.handleChange} placeholder="Enter Username" autoComplete="off" />
						</div>
						<div>
							<button type="submit">Sign In</button>
						</div>
					</form>
				</div>
			</div>
		)
	}
}

export default Signin
