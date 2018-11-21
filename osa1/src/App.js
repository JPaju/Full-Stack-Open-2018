import React from 'react';
import noteService from './services/notes'
import Form from './components/Form'
import Notes from './components/Notes'
import Button from './components/Button'
import Notification from './components/Notification'
import './index.css'


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            notes: [],
            showAll: true,
            error: null
        }
    }

    addNote = (note) => {
        const newNote = {
            content: note,
            date: new Date().toISOString(),
            important: Math.random() > 0.5
        }
        noteService
            .create(newNote)
            .then(response => this.fetchNotes())
            .catch(error => console.log(error))
    }

    addNotification = (message, time) => {
        this.setState({ error: message })        
        setTimeout(() => {
            this.setState({ error: null })
        }, time)
    }

    toggleImportance = (id) => () => {
        const note = this.state.notes.find(n => n.id === id)
        const newNote = { ...note, important: !note.important }

        noteService
            .update(id, newNote)
            .then(response => this.fetchNotes())
            .catch(err => {
                this.addNotification(`Muistiinpano "${note.content}" on jo poistettu palvelimelta`, 5000)
                this.fetchNotes()
            })
    }


    fetchNotes = () => {
        noteService
            .getAll()
            .then(notes => this.setState({ notes }))
            .catch(err => console.log(err))
    }

    componentDidMount = () => this.fetchNotes()

    render = () => (
        <div>
            <h1>Muistiinpanot</h1>
            <Notification message={this.state.error} />

            <ul>
                <Notes
                    notes={this.state.notes}
                    importantOnly={this.state.showAll}
                    toggleImportance={this.toggleImportance} />
                <Form onSubmitCallback={this.addNote} />
                <Button
                    label={this.state.showAll ? 'Vain tärkeät' : 'Näytä kaikki'}
                    callback={() => this.setState({ showAll: !this.state.showAll })} />

                <Button
                    label='Päivitä'
                    callback={() => this.fetchNotes()} />
            </ul>
        </div>
    )
}

export default App