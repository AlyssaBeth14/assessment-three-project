import characters from './db.json' assert {type: 'json'}

let globalId = 4

const handlerFunctions = {
    sayHello: (req, res) => {
        res.send('Hello there!');
    },
    allCharacters: (req, res) => {
        res.send(characters)
    },
    oneCharacter: (req, res) => {
        const {index} = req.params
           res.send('oneCharacter')
       }
}

export default handlerFunctions