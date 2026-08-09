const Header = (props) => <h2>{props.course}</h2>


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
  return (
    <>
      {course.map((course) => {
        const total = (course.parts).reduce((sum, part) => sum + part.exercises, 0)
        return (
          <div key={course.id}>
            <Header course={course.name} />
            <Content parts={course.parts} />
            <h4>total of {total} exercises</h4>
          </div>
        )
      })}
    </>
  )
}
const App = () => {

  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
      ]
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <>
      <h1>Web development curriculum</h1>
      <Course course={courses} />
    </>

  )
}

export default App