const bodyParser = require('body-parser')
const express = require('express')
const queryParser = require('express-query-int')

const cors = require('./cors')

const server = express()
const port = 3003

server.use(bodyParser.urlencoded({ extended:true }))
server.use(bodyParser.json())
server.use(cors)
server.use(queryParser())

server.listen(port, function(){
  console.log('Backend is running on port '+ port)
})

module.exports = server