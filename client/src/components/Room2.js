import React, {Component} from 'react'
import '../styles/App.css'
import {sendForm2, timestamp} from '../actions/chatActions'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

class Room2 extends Component {

	state = {
		text2:''
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]:e.target.value
		})
	}

	handleForm2 = (e) => {
		e.preventDefault()
		sendForm2(this.state.text2, timestamp())
		this.setState({
			text2:''
		})
	}

	render() {
		return (
			<div className="container">
				<div>
					<h1><i className="fa fa-pied-piper-alt"></i> slacker</h1>
					<h2>Chat Room #2</h2>
					<form onSubmit={this.handleForm2}>
						<input name="text2" onChange={this.handleChange} type="text" placeholder="Start Chatting..." value={this.state.text2} autoComplete="off" />
						<button type="submit">Submit</button>
					</form>
					<div className="room" id="room 2">
						{this.props.messages2.map((message, i) => (
							<div key={"message2" + i}>
								{message.username} :: {message.timestamp} :: {message.message}
							</div>
						))}
					</div>
					<div className="links">
						<div><Link to={"/chat"}>Main Chat Room</Link></div>
						<div>Chat Room #2</div>
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
		messages2:appstate.messages2
	}
}

export default connect(mapStateToProps)(Room2)
