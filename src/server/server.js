'use strict'

// imports
const express = require('express')
const cors = require('cors')
const app = express()

// vars
const PORT = process.env.PORT

// import files
const routes = require('../routes/routes')

app.disable('x-powered-by')
app.use(cors())
app.use(express.json())

// routes
app.use(routes)

// server initialization
app.listen(PORT, function () {
  console.log(`Server is running on PORT:${PORT}`)
})
