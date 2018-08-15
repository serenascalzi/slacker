import io from 'socket.io-client'
import store from '../store'

const socket = io.connect('http://0.0.0.0:3001')

socket.on('message room 1', function(data) {
	store.dispatch({
		type:'MESSAGE_1',
		payload:data
	})
})

export function sendForm1(message) {
	socket.emit('message room 1', {
		message:message
	})
}
