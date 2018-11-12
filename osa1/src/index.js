import React from 'react';
import ReactDOM from 'react-dom';
import Form from './components/Form'
import Note from './components/Note'
import './index.css'


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            notes: props.notes
        }
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

    getNotes = () => this.state.notes.map(note => <Note key={note.id} note={note} />)

    render() {
        return (
            <div>
                <h1>Muistiinpanot</h1>
                <ul>
                    {this.getNotes()}
                    <Form onSubmitCallback={this.addNote} />
                </ul>
            </div>
        )
    }
}

const notes = [
    {
        id: 1,
        content: 'HTML on helppoa',
        date: '2017-12-10T17:30:31.098Z',
        important: true
    },
    {
        id: 2,
        content: 'Selain pystyy suorittamaan vain Javascriptiä',
        date: '2017-12-10T17:30:31.098Z',
        important: false
    },
    {
        id: 3,
        content: 'HTTP-protokollan tärkeimmät metodit ovat GET ja POST',
        date: '2017-11-07T06:43:14.098Z',
        important: false
    }
]

ReactDOM.render(<App notes={notes} />, document.getElementById('root'));
