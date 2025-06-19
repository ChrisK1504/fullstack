const Person = ({ person, removePersonButtonHandler }) => {
  return (
    <div>
      {person.name} {person.number} <button onClick={removePersonButtonHandler}>delete</button>
    </div>
  )
}

export default Person