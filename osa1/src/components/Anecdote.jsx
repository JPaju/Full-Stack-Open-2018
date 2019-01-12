import React from 'react'
import Button from './Button'


const Anecdote = ({ anecdote, clickHandler }) => (
    <div>
        <div>
            <i>{anecdote.text}</i> <br />
            {'Has ' + anecdote.votes + ' votes'}
        </div>
        <Button label='Vote' handleClick={clickHandler} />
    </div>
)

export default Anecdote
