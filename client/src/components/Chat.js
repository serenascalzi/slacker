import React, {Component} from 'react'
import '../styles/App.css'
import {sendForm1, timestamp} from '../actions/chatActions'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

class Chat extends Component {

	state = {
		text1:''
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]:e.target.value
		})
	}

	handleForm1 = (e) => {
		e.preventDefault()
		sendForm1(this.state.text1, timestamp())
		this.setState({
			text1:''
		})
	}

	render() {
		return (
			<div className="container">
				<div>
					<h1><i className="fa fa-pied-piper-alt"></i> slacker</h1>
					<h2>Main Chat Room</h2>
					<div className="users">
						{this.props.users.map((user, i) => (
							<div key={"user" + i}>
								{user}
							</div>
						))}
					</div>
					<form onSubmit={this.handleForm1}>
						<input name="text1" onChange={this.handleChange} type="text" placeholder="Start Chatting..." value={this.state.text1} autoComplete="off" />
						<button type="submit">Submit</button>
					</form>
					<div className="room" id="room 1">
						{this.props.messages1.map((message, i) => (
							<div key={"message1" + i}>
								{message.username} : {message.timestamp} : {message.message}
							</div>
						))}
					</div>
					<div className="links">
						<div>Main Chat Room</div>
						<div><Link to={"/room2"}>Chat Room #2</Link></div>
						<div><Link to={"/room3"}>Chat Room #3</Link></div>
						<div><Link to={"/room4"}>Chat Room #4</Link></div>
					</div>
				</div>
			</div>
		)
	}
}

function mapStateToProps(appstate) {
	return {
		users:appstate.users,
		messages1:appstate.messages1
	}
}

export default connect(mapStateToProps)(Chat)
