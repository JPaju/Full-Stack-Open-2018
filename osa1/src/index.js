import React from 'react';
import ReactDOM from 'react-dom';
import Form from './components/Form'
import Note from './components/Note'
import Button from './components/Button'
import './index.css'


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            notes: props.notes,
            showAll: true
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

    getNotes = () => {
        const notesToRender = this.state.showAll ?
            this.state.notes :
            this.state.notes.filter(note => note.important)
        return notesToRender.map(note => <Note key={note.id} note={note} />)
    }

    render = () => (
        <div>
            <h1>Muistiinpanot</h1>
            <ul>
                {this.getNotes()}
                <Form onSubmitCallback={this.addNote} />
                <Button
                    label={this.state.showAll ? 'Vain tärkeät' : 'Näytä kaikki'} 
                    callback={() => this.setState({showAll: !this.state.showAll})}/>
            </ul>
        </div>
    )
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
