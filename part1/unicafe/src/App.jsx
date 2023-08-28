import { useState } from 'react'

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)


const Statisticline = ({text, value}) => {
  if (text === "positive") {
    value = value + " %"
  }
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = (props) => {
  if (props.good === 0 && props.neutral === 0 && props.bad === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }
  return (
    <table>
      <tbody>
        <Statisticline text="good" value={props.good} />
        <Statisticline text="neutral" value={props.neutral} />
        <Statisticline text="bad" value={props.bad} />
        <Statisticline text="all" value={props.good + props.neutral + props.bad} />
        <Statisticline text="average" value={(props.good - props.bad) / (props.good + props.neutral + props.bad)} />
        <Statisticline text="positive" value={props.good / (props.good + props.neutral + props.bad) * 100} />
      </tbody>
    </table>
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
    <Button onClick={() => setGood(good + 1)} text='good' />
    <Button onClick={() => setNeutral(neutral + 1)} text='neutral' />
    <Button onClick={() => setBad(bad + 1)} text='bad' />
    <h1>statistics</h1>
    <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App