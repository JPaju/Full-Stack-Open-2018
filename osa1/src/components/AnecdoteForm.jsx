import React from 'react'

const AnecdoteForm = ({newAnecdote}) => {
    return(
        <div>
            <h2>Create new Anecdote</h2>
            <form onSubmit={newAnecdote}>
                <input name='anecdote'/>
                <button>Create</button>
            </form>
        </div>
    )
}

export default AnecdoteForm