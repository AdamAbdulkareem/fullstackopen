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
const Ranking = ({ description, rating }) => {
  return (
    <div>
      {description} {rating}
    </div>
  )

}


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setToGood = () => {
    setGood(good + 1)
  }
  const setToNeutral = () => {
    setNeutral(neutral + 1)
  }
  const setToBad = () => {
    setBad(bad + 1)
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
      <Ranking description="good" rating={good} />
      <Ranking description="neutral" rating={neutral} />
      <Ranking description="bad" rating={bad} />
    </div>
  )
}

export default App;