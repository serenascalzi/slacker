function runsocket (io) {
  io.on('connection', socket => {
    console.log('connected')

    socket.on('signin', function (username) {
    	socket.username = username
    })

    socket.join('room 1')

    socket.on('message room 1', function (data) {
    	const obj = Object.assign(data, {
    		username:socket.username
    	})

    	io.to('room 1').emit('message room 1', obj)
    })
  })
}

export default runsocket
