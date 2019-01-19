import React from 'react'
import Anecdote from './Anecdote'

const TopAnecdote = ({ anecdote }) => (
    <div>
        <h3>Most voted anecdote</h3>
        <Anecdote
            anecdote={anecdote}
            buttonVisible={false}
        />
    </div>
)

export default TopAnecdote
