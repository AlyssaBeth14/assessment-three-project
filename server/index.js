//Import packages and files
import express from 'express'
import session from 'express-session'
import cors from 'cors'

import characters from './db.json' assert {type: 'json'}
import handlerFunctions from './controller.js'

//Setup express instance
const app = express()

//Setup Middleware
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended: false}))
app.use(express.static('client'))
app.use(session({
    secret: 'shhh',
    saveUninitialized: true,
    resave: false
}))


//Routes go here
const {sayHello, allCharacters, oneCharacter} = handlerFunctions
app.get('./hello', sayHello)

app.get('/characters', allCharacters)

app.get('/oneCharacter/:index', oneCharacter)



//Start up server with app.listen
app.listen(8000, () => console.log('Avengers assemble on http://localhost:8000'))
