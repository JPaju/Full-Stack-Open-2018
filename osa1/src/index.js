import React from 'react';
import ReactDOM from 'react-dom';
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
        this.fetchNotes()
    }

    addNote = (note) => {
        const newNote = {
            id: this.state.notes.length + 1,
            content: note,
            date: new Date().toISOString(),
            important: Math.random() > 0.5
        }
        const notes = this.state.notes.concat(newNote)
        this.setState({ notes })
    }

    fetchNotes = () => {
        fetch('http://localhost:3001/notes').then(response => {
            return response.json()
        }).then(notes => {
            console.log('Fetched notes: ', notes);
            this.setState({ notes})
        }).catch(err => console.log(err))
    }

    render = () => (
        <div>
            <h1>Muistiinpanot</h1>
            <ul>
                <Notes notes={this.state.notes} importantOnly={this.state.showAll} />
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

ReactDOM.render(<App/>, document.getElementById('root'));
