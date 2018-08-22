import React, {Component} from 'react'
import '../styles/App.css'
import {sendForm4, timestamp} from '../actions/chatActions'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

class Room4 extends Component {

	state = {
		text4:''
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]:e.target.value
		})
	}

	handleForm4 = (e) => {
		e.preventDefault()
		sendForm4(this.state.text4, timestamp())
		this.setState({
			text4:''
		})
	}

	render() {
		return (
			<div className="container">
				<div>
					<h1><i className="fa fa-pied-piper-alt"></i> slacker</h1>
					<h2>Chat Room #4</h2>
					<div className="users">
						{this.props.messages4.map((user, i) => (
							<div key={"user" + i}>
								{user.username}
							</div>
						))}
					</div>
					<form onSubmit={this.handleForm4}>
						<input name="text4" onChange={this.handleChange} type="text" placeholder="Start Chatting..." value={this.state.text4} autoComplete="off" />
						<button type="submit">Submit</button>
					</form>
					<div className="room" id="room 4">
						{this.props.messages4.map((message, i) => (
							<div key={"message4" + i}>
								{message.username} : {message.timestamp} : {message.message}
							</div>
						))}
					</div>
					<div className="links">
						<div><Link to={"/chat"}>Main Chat Room</Link></div>
						<div><Link to={"/room2"}>Chat Room #2</Link></div>
						<div><Link to={"/room3"}>Chat Room #3</Link></div>
						<div>Chat Room #4</div>
					</div>
				</div>
			</div>
		)
	}
}

function mapStateToProps(appstate) {
	return {
		messages4:appstate.messages4
	}
}

export default connect(mapStateToProps)(Room4)
