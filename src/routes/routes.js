'use strict'

const routes = require('express').Router()

// routes.get('/auth', async (req, res) => {
//   console.log(req.params)
//   console.log(req.query)
//   console.log(req.body)

//   const result = await twit
//     .get('statuses/user_timeline', { screen_name: 'devmozao', count: 200 })
//     .then(response => {
//       return {
//         data: { ...response.data },
//         remaining: response.resp.headers['x-rate-limit-remaining']
//       }
//     })
//     .catch(error => {
//       return res.send(error)
//     })

//   console.log(result)
//   return res.json(result)
// })

module.exports = routes
