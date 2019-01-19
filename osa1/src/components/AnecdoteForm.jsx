import React from 'react'
import { connect } from 'react-redux'
import { addNotification } from '../reducers/notification'
import { anecdoteCreation } from '../reducers/anecdotes'

class AnecdoteForm extends React.Component {

    newAnecdote = (event) => {
        event.preventDefault()
        const anecdote = event.target.anecdote.value
        event.target.anecdote.value = ''

        this.props.anecdoteCreation(anecdote)
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


export default connect(
    null,
    { anecdoteCreation }
)(AnecdoteForm)
