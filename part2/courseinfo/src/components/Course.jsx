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


export default Course;