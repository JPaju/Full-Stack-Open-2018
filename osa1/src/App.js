import React from 'react';
import axios from 'axios'
import Form from './components/Form'
import Notes from './components/Notes'
import Button from './components/Button'
import './index.css'


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            notes: [],
            showAll: true
        }
    }

    addNote = (note) => {
        const newNote = {
            content: note,
            date: new Date().toISOString(),
            important: Math.random() > 0.5
        }
        axios.post('http://localhost:3001/notes', newNote)
            .then(this.fetchNotes())
            .catch(error => console.log(error))
    }

    toggleImportance = (id) => () => {
        const url = `http://localhost:3001/notes/${id}`
        const note = this.state.notes.find(n => n.id === id)
        const changedNote = { ...note, important: !note.important }

        axios
            .put(url, changedNote)
            .then(response => this.fetchNotes())
    }


    fetchNotes = () => {
        axios.get('http://localhost:3001/notes').then(response => response.data)
            .then(notes => this.setState({ notes }))
            .catch(err => console.log(err))
    }

    componentDidMount = () => this.fetchNotes()

    render = () => (
        <div>
            <h1>Muistiinpanot</h1>
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