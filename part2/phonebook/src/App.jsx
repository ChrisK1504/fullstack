import { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

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
      <Filter filter={filter} inputHandler={handleFilterChange} />
      <h3>Add a new</h3>
      <PersonForm addNewPerson={addNewPerson} newName={newName} newNumber={newNumber} handleNameInputChange={handleNameInputChange} handleNumberInputChange={handleNumberInputChange} />
      <h2>Numbers</h2>
      <Persons persons={personsToShow} />
    </div>
  )
}

export default App