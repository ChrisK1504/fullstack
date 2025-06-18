const PersonForm = ({ addNewPerson, newName, newNumber, handleNameInputChange, handleNumberInputChange }) => {
  return (
    <div>
      <form onSubmit={addNewPerson}>
        <div>name: <input value={newName} onChange={handleNameInputChange}/></div>
        <div>number: <input value={newNumber} onChange={handleNumberInputChange}/></div>
        <div><button type="submit">add</button></div>
      </form>
    </div>
  )
}

export default PersonForm