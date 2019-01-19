import React from 'react'
import { connect } from 'react-redux'
import { anecdoteCreation } from '../reducers/anecdotes'
import { notify } from '../reducers/notification';


class AnecdoteForm extends React.Component {

    newAnecdote = async (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''
        this.props.anecdoteCreation(content)
        this.props.notify(`Created anecdote '${content}'`, 5)
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
    { anecdoteCreation, notify }
)(AnecdoteForm)
