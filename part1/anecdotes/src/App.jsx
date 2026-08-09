import { useState } from 'react'

const Button = ({onClick, title}) => {
    return (
        <button onClick={onClick}>{title}</button>
    )
}

const App = () => {
    const anecdotes = [
        'If it hurts, do it more often.',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
        'The only way to go fast, is to go well.'
    ]

    const [selected, setSelected] = useState(0)
    const [votes, setVotes] = useState({ 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0 })

    const entries = Object.entries(votes)
    const sorted = entries.sort((a, b) => b[1] - a[1])[0]
    const popularAnecdote = Number(sorted[0])
    
    
    const setToSelected = () => {
        const number = Math.floor(Math.random() * anecdotes.length)
        setSelected(number)
    }
    const addVote = () => {
        const selectedNumber = votes[selected]
        setVotes({...votes, [selected]: selectedNumber + 1})
    }
    return (
        <div>
            <h2>Anecdote of the day</h2>
            {anecdotes[selected]}
            <p>has {votes[selected]} votes</p>
            <Button onClick={addVote} title="vote"/>
            <Button onClick={setToSelected} title="next anecdotes"/>
            <h2>Anecdote with most votes</h2>
            {sorted[1] == 0 ? " " : anecdotes[popularAnecdote]}
            
        </div>
    )
}

export default App