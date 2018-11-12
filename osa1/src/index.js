import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'


const Note = ({ note }) => {
    return (
        <li>
            {note.content} <strong>{note.important ? 'tärkeä' : ''}</strong>
        </li>
    )
}

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            notes: props.notes
        }
    }

    render() {
        return (
            <div>
                <h1>Muistiinpanot</h1>
                <ul>
                    {this.state.notes.map(note => <Note key={note.id} note={note} />)}
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
