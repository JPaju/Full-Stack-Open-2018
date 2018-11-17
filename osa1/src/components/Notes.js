import React from 'react'
import Note from './Note'

const Notes = ({ notes, importantOnly, toggleImportance }) => {
    const notesToRender = importantOnly ?
        notes :
        notes.filter(note => note.important)
    return (
        notesToRender.map(note =>
            <Note
                key={note.id}
                note={note}
                toggleImportance={toggleImportance(note.id)}
            />)
    )
}

export default Notes