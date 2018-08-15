function runsocket(io) {
	io.on('connection', socket => {
		console.log('connected')

		socket.join('room 1')

		socket.on('message room 1', function(data) {
			io.to('room 1').emit('message room 1', data)
		})
	})
}

export default runsocket
