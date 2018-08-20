import express from 'express'
import connection from '../db/connection'

const router = express.Router()

router.get('/boo', (req, res, next) => {
  res.json({
    'AHH': true
  })
})

export default router
