const Filter = ({ filter, inputHandler }) => {
  return (
    <>
      filter shown with <input value={filter} onChange={inputHandler} />
    </>
  )
}

export default Filter