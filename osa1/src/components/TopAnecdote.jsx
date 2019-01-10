import React from 'react'

const TopAnecdote = ({ anecdote }) => (
    <div>
        <h3>Most voted anecdote</h3>
            {anecdote.text} <br/>
            {"Has " + anecdote.votes + " votes"}
    </div>
)

export default TopAnecdote 