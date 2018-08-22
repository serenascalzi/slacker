import React, {Component} from 'react'
import '../styles/App.css'
import {sendForm3, timestamp} from '../actions/chatActions'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

class Room3 extends Component {

	state = {
		text3:''
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]:e.target.value
		})
	}

	handleForm3 = (e) => {
		e.preventDefault()
		sendForm3(this.state.text3, timestamp())
		this.setState({
			text3:''
		})
	}

	render() {
		return (
			<div className="container">
				<div>
					<h1><i className="fa fa-pied-piper-alt"></i> slacker</h1>
					<h2>Chat Room #3</h2>
					<div className="users">
						{this.props.messages3.map((user, i) => (
							<div key={"user" + i}>
								{user.username}
							</div>
						))}
					</div>
					<form onSubmit={this.handleForm3}>
						<input name="text3" onChange={this.handleChange} type="text" placeholder="Start Chatting..." value={this.state.text3} autoComplete="off" />
						<button type="submit">Submit</button>
					</form>
					<div className="room" id="room 3">
						{this.props.messages3.map((message, i) => (
							<div key={"message3" + i}>
								{message.username} : {message.timestamp} : {message.message}
							</div>
						))}
					</div>
					<div className="links">
						<div><Link to={"/chat"}>Main Chat Room</Link></div>
						<div><Link to={"/room2"}>Chat Room #2</Link></div>
						<div>Chat Room #3</div>
						<div><Link to={"/room4"}>Chat Room #4</Link></div>
					</div>
				</div>
			</div>
		)
	}
}

function mapStateToProps(appstate) {
	return {
		messages3:appstate.messages3
	}
}

export default connect(mapStateToProps)(Room3)
