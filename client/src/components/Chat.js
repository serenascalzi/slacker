import React, {Component} from 'react'
import '../styles/App.css'
import {sendForm1, timestamp} from '../actions/chatActions'
import {connect} from 'react-redux'

class Chat extends Component {

	state = {
		text1:'',
		time:timestamp()
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]:e.target.value
		})
	}

	handleForm1 = (e) => {
		e.preventDefault()
		sendForm1(this.state.text1, this.state.time)
		this.setState({
			text1:'',
			time:timestamp()
		})
	}

	render() {
		return (
			<div className="container">
				<div>
					<h1><i className="fa fa-pied-piper-alt"></i> slacker</h1>
					<form onSubmit={this.handleForm1}>
						<input name="text1" onChange={this.handleChange} type="text" placeholder="Start chatting..." value={this.state.text1} autoComplete="off" />
						<button type="submit">Submit</button>
					</form>
					<div className="room" id="room 1">
						{this.props.messages1.map((message, i) => (
							<div key={"message1" + i}>
								{message.username} :: {message.timestamp} :: {message.message}
							</div>
						))}
					</div>
				</div>
			</div>
		)
	}
}

function mapStateToProps(appstate) {
	return {
		messages1:appstate.chatReducer.messages1
	}
}

export default connect(mapStateToProps)(Chat)
