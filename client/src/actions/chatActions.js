import io from 'socket.io-client'
import store from '../store'
//import axios from 'axios'
//import jwt from 'jsonwebtoken'

const socket = io.connect('http://0.0.0.0:3001')

socket.on('message room 1', function (data) {
  store.dispatch({
    type: 'MESSAGE_1',
    payload: data
  })
})

export function sendForm1 (message, timestamp) {
  socket.emit('message room 1', {
    message: message,
    timestamp: timestamp
  })
}

export function signin (username) {
  socket.emit('signin', username)
}

export function timestamp () {
  let date = new Date()
  let time = date.toLocaleTimeString()
  return time
}

/*let loginInterceptor = null

if (window.localStorage.getItem('token')) {
  const token = window.localStorage.getItem('token')

  loginInterceptor = axios.interceptors.request.use(config => {
    config.headers['Authorization'] = 'Bearer ' + token
  })

  const username = jwt.decode(token).username

  store.dispatch({
    type: 'LOGIN_SUCCESS',
    payload: {
      username: username
    }
  })
}

export function login (username, password) {
  axios.post('/api/login', {username, password}).then(resp => {
    const token = resp.data.token

    loginInterceptor = axios.interceptors.request.use(config => {
      config.headers['Authorization'] = 'Bearer ' + token
    })
    store.dispatch({
      type: 'LOGIN_SUCCESS',
      payload: {
        username: username
      }
    })
  }).catch(err => {
    store.dispatch({
      type: 'LOGIN_FAILURE'
    })
  })
}

export function logout () {
  axios.interceptors.request.eject(loginInterceptor)
  store.dispatch({
    type: 'LOGOUT'
  })
}*/
