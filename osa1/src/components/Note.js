import React from 'react'

const Note = ({ note, toggleImportance, deleteNote }) => {
    const label = note.important ? 'Tee epätärkeäksi' : 'Tee tärkeäksi'
    return (
        <li className="note">
            {note.content}
            <strong>{note.important ? ' tärkeä' : ''}</strong>
            <button onClick={toggleImportance}>{label}</button>
            <button onClick={deleteNote}>Poista</button>
        </li>
    )
}

export default Note