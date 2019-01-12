import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import anecdoteReducer, { initialState, likeAnecdote, anecdoteCreation } from './reducers/anecdoteReducer'
import Anecdote from './components/Anecdote'
import AnecdoteForm from './components/AnecdoteForm'
import './index.css'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = { anecdotes: initialState }
    }

    likeAnecdote = (id) => () => {
        store.dispatch(likeAnecdote(id))
    }

    createAnecdote = (event) => {
        event.preventDefault()
        store.dispatch(anecdoteCreation(event.target.anecdote.value))
        event.target.anecdote.value = ''
    }

    findMostVoted = () => {
        return store.getState().reduce((max, x) => max.votes > x.votes ? max : x, { votes: -1 })
    }

    render() {
        return (
            <div>
                {store.getState()
                    .sort((a, b) => b.votes - a.votes)
                    .map(a =>
                        <Anecdote
                            anecdote={a}
                            clickHandler={this.likeAnecdote(a.id)}
                            key={a.id}
                        />
                    )}
                <AnecdoteForm newAnecdote={this.createAnecdote} />
            </div>
        )
    }
}


const store = createStore(anecdoteReducer, initialState)

const render = () => {
    ReactDOM.render(
        <App />,
        document.getElementById('root')
    )
}

render()
store.subscribe(render)
