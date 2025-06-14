const Header = (props) => {
    console.log(props)

  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Content = (props) => {
  console.log(props)
  return (
    <> 
      <Part part={props.parts[0]} exercises={props.exercises[0]} />
      <Part part={props.parts[1]} exercises={props.exercises[1]} />
      <Part part={props.parts[2]} exercises={props.exercises[2]} />
    </>
  )
}

const Part = (props) => {
    console.log(props)

  return (
    <>
      <p>{props.part} {props.exercises}</p>
    </>
  )
}

const Total = (props) => {
    console.log(props)

  return (
    <>
      <p>Number of exericses {props.totalExercises}</p>
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />
      <Content parts={[part1.name, part2.name, part3.name]} exercises={[part1.exercises, part2.exercises, part3.exercises]} />
      <Total totalExercises={part1.exercises + part2.exercises + part3.exercises} /> 
    </div>
  )
}

export default App