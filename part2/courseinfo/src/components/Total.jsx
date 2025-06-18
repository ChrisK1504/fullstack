const Total = ({ parts }) => {
  const getTotal = () => parts.reduce((acc, parts) => acc + parts.exercises, 0)
  return (
    <p><b>total of {getTotal()} exercises</b></p>
  )
}

export default Total  