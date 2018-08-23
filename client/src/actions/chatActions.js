import io from 'socket.io-client'
import axios from 'axios'
import store from '../store'
import {api} from '../lib/Authentication'

const socket = io.connect('http://10.68.0.245:3001')

export function register (user) {
  axios.post('/api/register/', user).then(resp => {
    console.log(resp)
  })
}

export function login (user) {
  axios.post('/api/login/', user).then(resp => {
    console.log(resp)
  })
}

export function addUser (username) {
  store.dispatch({
    type: 'ADD_USER',
    payload: username
  })
}

export function timestamp () {
  let date = new Date()
  let time = date.toLocaleTimeString()
  return time
}

export function sendForm1 (message, timestamp) {
  socket.emit('message room 1', {
    message: message,
    timestamp: timestamp,
    username: api.getProfile().username
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
    timestamp: timestamp,
    username: api.getProfile().username
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
    timestamp: timestamp,
    username: api.getProfile().username
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
    timestamp: timestamp,
    username: api.getProfile().username
  })
}

socket.on('message room 4', function (data) {
  store.dispatch({
    type: 'MESSAGE_4',
    payload: data
  })
})
