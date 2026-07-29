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

const Total = ({ total }) => {
  return (
    <p>all {total}</p>
  )
}

const Average = ({ positiveRating, negativeRating, total }) => {
  if (total == 0) {
    return (
      "No feedback given"
    )
  }
  const average = (positiveRating - negativeRating) / total
  return (
    <div>
      average {average}
    </div>
  )
}
const Percent = ({ positiveRating, total }) => {
  if (total == 0) {
    return (
      <div>
        Positive: "No feedback given"
      </div>

    )
  }
  const percentage = (positiveRating * 100) / total
  return (
    <div>
      positive {percentage} %
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
      <div className="ranking">
        <Ranking description="good" rating={good} />
        <Ranking description="neutral" rating={neutral} />
        <Ranking description="bad" rating={bad} />
        <Total total={all} />
        <Average positiveRating={good} negativeRating={bad} total={all} />
        <Percent positiveRating={good} total={all} />
      </div>

    </div>
  )
}

export default App;