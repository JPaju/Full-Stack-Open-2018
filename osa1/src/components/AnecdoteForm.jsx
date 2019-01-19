import React from 'react'
import { addNotification } from '../reducers/notification'
import { anecdoteCreation } from '../reducers/anecdotes'

class AnecdoteForm extends React.Component {
    constructor(props) {
        super(props)
        this.store = this.props.store
    }

    newAnecdote = (event) => {
        event.preventDefault()
        const anecdote = event.target.anecdote.value
        event.target.anecdote.value = ''

        this.store.dispatch(anecdoteCreation(anecdote))
        addNotification(`Created anecdote '${anecdote}'`, 5, this.store)
    }

    render = () => {
        return (
            <div>
                <h2>Create new Anecdote</h2>
                <form onSubmit={this.newAnecdote}>
                    <input name='anecdote' />
                    <button>Create</button>
                </form>
            </div>
        )
    }
}

export default AnecdoteForm