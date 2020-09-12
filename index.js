const fs = require('fs')
const express = require('express')

const server = express()
const userData = {}

// Post-Daten in JSON umwandeln
server.use(express.json())
// URL-String in Objekt umwandeln
server.use(express.urlencoded({ extended: true }))

server.get('/json', (request, response) => {
    response.set("Access-Control-Allow-Headers", "Content-Type")
    response.set("Accept", "application/json")
    response.set("auth-token", "xxxx")
    response.set("Access-Control-Allow-Origin", "*")
    response.set("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, HEAD")
    response.send({message: "Maxim"})
})

server.get('/', (request, response) => {
    response.send(`
        <form action="/form-data" method="POST">
            <input type="text" name="firstname">
            <input type="submit" value="Senden">
        </form>
    `)
})

server.post('/form-data', (req, res) => {
    userData.firstname = req.body.firstname
    res.send('Daten erhalten ' + userData.firstname)
})

server.listen(3000, (err) => {
    if(err) {
        return console.log(err)
    }
    console.log('Server running at Port 3000')
})