import Part from "./Part"

const Content = ({ parts }) => {
  return (
    parts.map(part => <Part key={part.id} info={part} />)
  )
}

export default Content