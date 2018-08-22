function runsocket (io) {
  io.on('connection', socket => {
    console.log('connected')

    socket.join('room 1')

    socket.on('message room 1', function (data) {
        io.to('room 1').emit('message room 1', data)
    })

    socket.join('room 2')

    socket.on('message room 2', function (data) {
        io.to('room 2').emit('message room 2', data)
    })

    socket.join('room 3')

    socket.on('message room 3', function (data) {
        io.to('room 3').emit('message room 3', data)
    })

    socket.join('room 4')

    socket.on('message room 4', function (data) {
        io.to('room 4').emit('message room 4', data)
    })
  })
}

export default runsocket
