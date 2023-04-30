const { Router } = require('express')

const { gethello, createUser } = require('./controller')

const routes = Router()

routes.get('/hello', gethello)

routes.post('/user', createUser)

module.exports = routes