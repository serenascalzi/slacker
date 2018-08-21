function runsocket (io) {
  const users = []

  io.on('connection', socket => {
    console.log('connected')
    console.log(users)

    socket.on('signin', function (username) {
        socket.username = username
        users.push(username)
        io.emit('signin', users)
    })

    socket.join('room 1')

    socket.on('message room 1', function (data) {
    	const obj = Object.assign(data, {
    		username:socket.username
    	})

    	io.to('room 1').emit('message room 1', obj)
    })

    socket.join('room 2')

    socket.on('message room 2', function (data) {
        const obj = Object.assign(data, {
            username:socket.username
        })

        io.to('room 2').emit('message room 2', obj)
    })

    socket.join('room 3')

    socket.on('message room 3', function (data) {
        const obj = Object.assign(data, {
            username:socket.username
        })

        io.to('room 3').emit('message room 3', obj)
    })

    socket.join('room 4')

    socket.on('message room 4', function (data) {
        const obj = Object.assign(data, {
            username:socket.username
        })

        io.to('room 4').emit('message room 4', obj)
    })
  })
}

export default runsocket
