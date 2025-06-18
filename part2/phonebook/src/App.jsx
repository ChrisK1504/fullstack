import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  const addNewPerson = (event) => {
    event.preventDefault()
    if (nameExists(persons) === true) {
      alert(`${newName} is already in phonebook`)
    } else {
      const newPersonObject = {
        name: newName,
        number: newNumber,
        id: persons.length + 1
      }

      console.log(newPersonObject, persons);
      setPersons(persons.concat(newPersonObject))
    }
  }

  const handleNameInputChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value)
  }

  const handleNumberInputChange = (event) => {
    console.log(event.target.value);
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    console.log(event.target.value);
    setFilter(event.target.value)
  }

  const nameExists = (persons) => {
    const found = persons.find(person => person.name === newName)
    return found !== undefined ? true : false
  }

  const personsToShow = filter === '' ? persons : persons.filter(person => person.name.toLowerCase().includes(filter) === true)

  return (
    <div>
      <h2>Phonebook</h2>
      <div>filter shown with <input value={filter} onChange={handleFilterChange}/></div>
      <h2>Add a new</h2>
      <form onSubmit={addNewPerson}>
        <div>name: <input value={newName} onChange={handleNameInputChange}/></div>
        <div>number: <input value={newNumber} onChange={handleNumberInputChange}/></div>
        <div><button type="submit">add</button></div>
      </form>
      <h2>Numbers</h2>
      {personsToShow.map(person => <p key={person.id}>{person.name} {person.number}</p>)}
    </div>
  )
}

export default App