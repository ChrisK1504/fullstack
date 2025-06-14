import { useState } from 'react'

const Button = ({label, onClick}) => <button onClick={onClick}>{label}</button>

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const average = () => {
    return (good - bad) / (good + neutral + bad)
  }

  const all = () => {
    return good + neutral + bad
  }

  const positive = () => {
    return good / all() * 100
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button label={"good"} onClick={() => setGood(good + 1)} />
      <Button label={"neutral"} onClick={() => setNeutral(neutral + 1)} />
      <Button label={"bad"} onClick={() => setBad(bad + 1)} />
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {all()}</p>
      <p>average {average()}</p>
      <p>positive {positive()}%</p>
    </div>
  )
}

export default App