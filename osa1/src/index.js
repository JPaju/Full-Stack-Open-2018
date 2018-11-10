import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selected: 0,
            votes: new Array(anecdotes.length).fill(0)
        }
    }

    clickHandler = (type) => {
        const handlers = {
            next: () => {
                this.setState({ selected: Math.floor(Math.random() * anecdotes.length) })
            },

            vote: () => {
                const newVotes = [...this.state.votes]
                newVotes[this.state.selected] += 1
                this.setState({ votes: newVotes })
            }
        }
        return handlers[type]
    }

    findMostVoted = () => {
        return anecdotes[this.state.votes.indexOf(Math.max(...this.state.votes))]
    }

    render() {
        return (
            <div>
                <Anecdote state={this.state} clickHandler={this.clickHandler} />
                <TopAnecdote mostVoted={this.findMostVoted()} votes={Math.max(...this.state.votes)} />
            </div>
        )
    }
}

const Anecdote = ({ state, clickHandler }) => (
    <div>
        <h1>Anecdote of the hour</h1>
        <p>{anecdotes[state.selected]}</p>
        <VoteCountDisplay votes={state.votes[state.selected]} />
        <Button label="Vote" handleClick={clickHandler('vote')} />
        <Button label="New anecdote" handleClick={clickHandler('next')} />
    </div>
)

const TopAnecdote = ({ mostVoted, votes }) => (
    <div>
        <h3>Most voted anecdote</h3>
        <p>
            {mostVoted}
            <VoteCountDisplay votes={votes} />
        </p>
    </div>
)

const Button = ({ handleClick, label }) => (
    <button onClick={handleClick}>{label}</button>
)

const VoteCountDisplay = ({ votes }) => (
    <div>{"Has " + votes + " votes"}</div>
)

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
    <App anecdotes={anecdotes} />,
    document.getElementById('root')
)