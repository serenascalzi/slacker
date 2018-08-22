import express from 'express'
import sha512 from 'js-sha512'
import connection from '../db/connection'
import jwt from 'jsonwebtoken'
import config from 'config'

const router = express.Router()

router.post('/register', (req, res, next) => {
  const username = req.body.username
  const password = sha512(req.body.password)

  console.log(password)

  const sql = 'INSERT INTO users (username, password) VALUES (?, ?)'

  connection.query(sql, [username, password], (err, results, fields) => {
    res.json({
      message: 'User Created'
    })
  })
})

router.post('/login', (req, res, next) => {
  const username = req.body.username
  const password = sha512(req.body.password)

  console.log(username, password)

  const sql = 'SELECT count(1) as count FROM users WHERE username = ? AND password = ?'

  connection.query(sql, [username, password], (err, results, fields) => {
    if (results[0].count > 0) {
      const token = jwt.sign({'username': username}, config.get('jwt.secret'))
      res.json({
        token: token
      })
    } else {
      res.status(401).json({
        message: 'Username/Password Incorrect'
      })
    }
  })
})

export default router
