const express = require('express')

const server = express()

server.use(express.json())

server.use('/hello', (request, response) => {
    return response.json({ msg: true })
})

server.use('/user', (request, response) => {
    const {nome, idade} = request.body

    const payload = {
        nome,
        idade
    }

    return response.json(payload)
})

server.listen(3333, () => {
    return console.log (`rodando na porta ${3333}`)
})