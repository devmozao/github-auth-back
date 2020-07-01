'use strict'

const axios = require('axios')

axios.create({
  timeout: 10000
})

const auth = (data = '') => {
  console.log('mozao => ', data)
  return axios
    .post(`https://github.com/login/oauth/access_token?client_id=7e263d0b1d2fb885292c&client_secret=0a46343f3e75c6f594e4543a97ab80c12a3cc1cb&code=${data}`)
    .then(result => result)
    .catch(error => error)
}

module.exports = {
  auth
}
