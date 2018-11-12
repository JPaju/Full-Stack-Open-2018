import React from 'react'

const Note = ({ note }) => {
    return (
        <li>
            {note.content} <strong>{note.important ? 'tärkeä' : ''}</strong>
        </li>
    )
}

export default Note