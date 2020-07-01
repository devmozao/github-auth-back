'use strict'

const routes = require('express').Router()
const { auth } = require('../services/api')

routes.get('/auth', async (req, res) => {
  console.log(req.params)
  console.log(req.query)
  console.log(req.body)

  let response

  try {
    const { data } = req.body
    response = await auth(data)
    console.log('resp', response)
  } catch (error) {
    console.log('error', error)
    response = error
  }
  return res.send(response.data)
})

module.exports = routes
