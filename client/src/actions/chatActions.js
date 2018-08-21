import io from 'socket.io-client'
import store from '../store'

const socket = io.connect('http://10.68.0.245:3001')

export function signin (username) {
  socket.emit('signin', username)
}

socket.on('signin', function (data) {
  store.dispatch({
    type: 'USERS',
    payload: data
  })
})

export function timestamp () {
  let date = new Date()
  let time = date.toLocaleTimeString()
  return time
}

export function sendForm1 (message, timestamp) {
  socket.emit('message room 1', {
    message: message,
    timestamp: timestamp
  })
}

socket.on('message room 1', function (data) {
  store.dispatch({
    type: 'MESSAGE_1',
    payload: data
  })
})

export function sendForm2 (message, timestamp) {
  socket.emit('message room 2', {
    message: message,
    timestamp: timestamp
  })
}

socket.on('message room 2', function (data) {
  store.dispatch({
    type: 'MESSAGE_2',
    payload: data
  })
})

export function sendForm3 (message, timestamp) {
  socket.emit('message room 3', {
    message: message,
    timestamp: timestamp
  })
}

socket.on('message room 3', function (data) {
  store.dispatch({
    type: 'MESSAGE_3',
    payload: data
  })
})

export function sendForm4 (message, timestamp) {
  socket.emit('message room 4', {
    message: message,
    timestamp: timestamp
  })
}

socket.on('message room 4', function (data) {
  store.dispatch({
    type: 'MESSAGE_4',
    payload: data
  })
})
