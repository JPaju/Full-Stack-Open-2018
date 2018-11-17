import React from 'react'

const Note = ({ note, toggleImportance }) => {
    const label = note.important ? 'Tee epätärkeäksi' : 'Tee tärkeäksi'
    return (
        <li>
            {note.content}
            <strong>{note.important ? ' tärkeä' : ''}</strong>
            <button onClick={toggleImportance}>{label}</button>
        </li>
    )
}

export default Note