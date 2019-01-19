import React from 'react'
import Button from './Button'


const Anecdote = ({ anecdote, clickHandler, buttonVisible = true }) => {
    const style = {
        border: 'solid',
        padding: 5,
        borderWidth: 2,
        marginBottom: 5
    }
    return (

        < div style={style} >
            <div>
                <i>{anecdote.content}</i> <br />
                {'Has ' + anecdote.votes + ' votes'}
            </div>
            <div style={{ display: buttonVisible ? 'block' : 'none' }}>
                <Button label='Vote' handleClick={clickHandler} />
            </div>
        </div >
    )

}

Anecdote.defaultProps = {

}

export default Anecdote
