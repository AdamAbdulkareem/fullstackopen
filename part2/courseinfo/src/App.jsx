const Header = (props) => <h1>{props.course}</h1>


const Parts = ({ parts }) => {
  return (
    <div>
      {parts.map(part =>
        <p key={part.id}>{part.name} {part.exercises}</p>
      )}
    </div>
  )
}

const Content = ({ parts }) => {
  return (
    <div>
      <Parts parts={parts} />
    </div>
  )
}


const Course = ({ course }) => {

  const total = (course.parts).reduce((sum, part) => sum + part.exercises, 0)
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <h4>total of {total} exercises</h4>
    </div>
  )
}

const App = () => {

  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ],
  }

  return <Course course={course} />
}

export default App