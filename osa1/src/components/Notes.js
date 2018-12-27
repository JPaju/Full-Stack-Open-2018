import React from 'react'
import Note from './Note'

const Notes = ({ notes, importantOnly, toggleImportance, deleteNote }) => {
    
    const notesToRender = importantOnly ?
    notes :
    notes.filter(note => note.important)
    
    console.log('Notes component, notesToRender: ', notesToRender)

    return (
        notesToRender.map(note =>
            <Note
                key={note.id}
                note={note}
                toggleImportance={toggleImportance(note.id)}
                deleteNote={deleteNote(note.id)}
            />)
    )
}

export default Notes