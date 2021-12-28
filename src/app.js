const express = require('express')
const consign = require('consign')
const cors = require('cors')
const helmet = require('helmet')
// START DATABASE
require('./model/db.connect')
// ************ CONFIG ****************
const server = express()
const _PORT = process.env.PORT || 3000
const CORS_PORT = process.env.CORS_PORT || "*"
const corsOptions = {
  origin: CORS_PORT,
  optionsSuccessStatus: 200
}
// ************ MIDDLEWARE ****************
server.use(helmet())
server.use(cors(corsOptions))
server.use(express.json())
// ************** ROUTES ******************
consign().include('src/routes').into(server)

// ************** SERVER ******************
server.listen(_PORT,()=>{
  console.log(`Server is running on http://localhost:${_PORT}`);
})