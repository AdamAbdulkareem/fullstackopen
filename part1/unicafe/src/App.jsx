import { useState } from "react"
import "./App.css"

const Header = ({ title }) => {
  return (
    <div>
      <h2>{title}</h2>
    </div>
  )
}

const Button = ({ onClick, description }) => {
  return (
    <div>
      <button onClick={onClick}>{description}</button>
    </div>
  )
}

const StatisticLine = ({ text, value }) => {
  if (text == "positive") {
    return (
      <div>
        {text} {value}%
      </div>
    )
  }
  return (
    <div>
      {text} {value}
    </div>
  )
}

const Statistics = ({ good, neutral, bad, all }) => {
  const average = (good - bad) / all
  const percentage = (good * 100) / all
  if (all == 0){
    return (
      <div>
        No feedback given
      </div>
    )
  }

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td><StatisticLine text="good" value={good} /></td>
          </tr>
          <tr>
            <td> <StatisticLine text="neutral" value={neutral} /></td>
          </tr>
          <tr>
            <td>  <StatisticLine text="bad" value={bad} /></td>
          </tr>
          <tr>
            <td> <StatisticLine text="all" value={all} /></td>
          </tr>
          <tr>
            <td><StatisticLine text="average" value={average} /></td>
          </tr>
          <tr>
            <td>
              <StatisticLine text="positive" value={percentage} /></td>
          </tr>
        </tbody>

      </table>
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)



  const setToGood = () => {
    const updateGood = good + 1
    setGood(updateGood)
    setAll(all + 1)
  }
  const setToNeutral = () => {
    const updateNeutral = neutral + 1
    setNeutral(updateNeutral)
    setAll(all + 1)
  }
  const setToBad = () => {
    const updateBad = bad + 1
    setBad(updateBad)
    setAll(all + 1)
  }

  return (
    <div>
      <Header title="Give Feedback" />
      <div className="rating-btn">
        <Button onClick={() => setToGood()} description="good" />
        <Button onClick={() => setToNeutral()} description="neutral" />
        <Button onClick={() => setToBad()} description="bad" />
      </div>
      <Header title="Statistics" />
      <Statistics good={good} neutral={neutral} bad={bad} all={all} />
    </div>
  )
}

export default App;