import { useState } from 'react'

const Button = ({label, onClick}) => <button onClick={onClick}>{label}</button>

const StatisticLine = ({text, value}) => <p>{text} {value}</p>

const Statistics = ({good, neutral, bad}) => {
  const average = () => {
    return (good - bad) / (good + neutral + bad)
  }

  const all = () => {
    return good + neutral + bad
  }

  const positive = () => {
    return good / all() * 100
  }

  if (good === 0 && neutral === 0 && bad === 0) {
    return (
      <>
        <p>No feedback given</p>
      </>
    )
  }

  return (
    <>
      <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      <StatisticLine text="all" value={all()} />
      <StatisticLine text="average" value={average()} />
      <StatisticLine text="positive" value={positive()} />
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  

  return (
    <div>
      <h1>give feedback</h1>
      <Button label={"good"} onClick={() => setGood(good + 1)} />
      <Button label={"neutral"} onClick={() => setNeutral(neutral + 1)} />
      <Button label={"bad"} onClick={() => setBad(bad + 1)} />

      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
      
    </div>
  )
}

export default App