import { useEffect, useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Person from './components/Persons'
import PersonsService from './services/persons'
import Message from './components/Message'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [message, setMessage] = useState('')
  const [successful, setSuccessful] = useState(true)

  useEffect(() => {
    PersonsService
      .getAll()
      .then(initialPerson => {
        console.log(initialPerson)
        setPersons(initialPerson)
      })

  }, [])

  const addNewPerson = (event) => {
    event.preventDefault()

    if (nameExists(persons) === true) {
      if (window.confirm(`${newName} is already added to phonebook, replace the older number with a new one?`)) {
        const newPersonObject = {
          name: newName,
          number: newNumber,
        }
        const personId = persons.find(p => p.name === newName).id

        PersonsService
          .update(newPersonObject, personId)
          .then(returnedPerson => {
            setPersons(persons.map(p => p.id === returnedPerson.id ? returnedPerson : p))
            setNewName('')
            setNewNumber('')

            setSuccessful(true)
            setMessage(`Changed number for ${newPersonObject.name}`)
            setTimeout(() => {
              setMessage('')
            }, 5000)
          })
          .catch(error => {
            setPersons(persons.filter(p => p.id !== personId))

            setSuccessful(false)
            setMessage(`Information of ${newName} has already been removed from server`)
            setTimeout(() => {
              setMessage('')
            }, 5000)
          })
      }
    } else {
      const newPersonObject = {
        name: newName,
        number: newNumber,
      }

      PersonsService
        .create(newPersonObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNewName('')
          setNewNumber('')

          setSuccessful(true)
          setMessage(`Added ${newPersonObject.name}`)
          setTimeout(() => {
            setMessage('')
          }, 3000)
        })
    }
  }

  const removePerson = (person) => {
    console.log(person)
    if (window.confirm(`Delete ${person.name}?`)) {
      PersonsService
        .remove(person.id)
        .then(response => {
          setPersons(persons.filter(p => p.id !== person.id))
        })
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
      <Message message={message} successful={successful} />
      <Filter filter={filter} inputHandler={handleFilterChange} />
      <h3>Add a new</h3>
      <PersonForm addNewPerson={addNewPerson} newName={newName} newNumber={newNumber} handleNameInputChange={handleNameInputChange} handleNumberInputChange={handleNumberInputChange} />
      <h2>Numbers</h2>
      {personsToShow.map(person => <Person key={person.id} person={person} removePersonButtonHandler={() => removePerson(person)} />)}
    </div>
  )
}

export default App