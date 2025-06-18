import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const addNewPerson = (event) => {
    event.preventDefault()
    if (nameExists(persons) === true) {
      alert(`${newName} is already in phonebook`)
    } else {
      const newPersonObject = {
        name: newName,
      }

      console.log(newPersonObject, persons);
      setPersons(persons.concat(newPersonObject))
    }
  }

  const handleInputChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value)
  }

  const nameExists = (persons) => {
    const found = persons.find(person => person.name === newName)
    return found !== undefined ? true : false
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNewPerson}>
        <div>
          name: <input value={newName} onChange={handleInputChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => <p key={person}>{person.name}</p>)}
    </div>
  )
}

export default App