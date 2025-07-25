const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const app = express()

morgan.token('body', function (req) { return JSON.stringify(req.body) })

app.use(cors())
app.use(express.json())
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))
app.use(express.static('dist'))

let persons =
  [
    {
      "id": "1",
      "name": "Arto Hellas",
      "number": "040-123456"
    },
    {
      "id": "2",
      "name": "Ada Lovelace",
      "number": "39-44-5323523"
    },
    {
      "id": "3",
      "name": "Dan Abramov",
      "number": "12-43-234345"
    },
    {
      "id": "4",
      "name": "Mary Poppendieck",
      "number": "39-23-6423122"
    }
  ]

app.get('/api/persons', (request, response) => {
  response.json(persons)
})

app.get('/info', (req, res) => {
  const personsLength = persons.length
  const date = new Date()

  res.send(`
      <div>
        <p>Phonebook as info for ${personsLength}</p>
        <p>${date}</p>
      </div>
    `)
})

app.get('/api/persons/:id', (req, res) => {
  const id = req.params.id
  const person = persons.find(p => p.id === id)

  if (person) {
    res.json(person)
  } else {
    res.status(404).end('Person not found')
  }
})

app.delete('/api/persons/:id', (req, res) => {
  const id = req.params.id
  persons = persons.filter(p => p.id !== id)

  res.status(204).end()
})


app.post('/api/persons', (req, res) => {
  const newId = Math.trunc((Math.random() * 100)).toString()
  const body = req.body
  console.log(req.body);

  if (!body.name) {
    return res.status(400).json({
      error: 'missing name'
    })
  }

  if (!body.number) {
    return res.status(400).json({
      error: 'missing number'
    })
  }

  if (persons.find(p => p.name === body.name)) {
    return res.status(400).json({
      error: 'name must be unique'
    })
  }

  const newPerson = {
    id: newId,
    name: body.name,
    number: body.number,
  }

  persons = persons.concat(newPerson)
  res.json(newPerson)
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
})