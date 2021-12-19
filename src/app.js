const express = require('express')
const consign = require('consign')
require('./model/db.connect')
// ************ CONFIG ****************
const server = express()
const _PORT = process.env.PORT || 3000
// ************ MIDDLEWARE ****************
server.use(express.json())

// ************** ROUTES ******************
consign().include('src/routes').into(server)


server.listen(_PORT,()=>{
  console.log("Server running on http://localhost:3000");
})