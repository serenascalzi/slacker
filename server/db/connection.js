import mysql from 'mysql'
import config from 'config'

const connection = mysql.createConnection({
  user: config.get('db.user'),
  	password: config.get('db.password'),
  	database: config.get('db.database'),
  	host: config.get('db.host')
})

connection.connect()

export default connection
