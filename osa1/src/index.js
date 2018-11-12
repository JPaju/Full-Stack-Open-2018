import React from 'react';
import ReactDOM from 'react-dom'
import Form from './components/Form'
import PhoneBook from './components/PhoneBook'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            persons: [
                {
                    name: 'Arto Hellas',
                    id: 1
                }
            ]
        }
    }

    addPerson = (name) => {
        this.checkDuplicate(name) ?
        this.setState({ persons: [...this.state.persons].concat({ name }) }) :
        alert('Name already exists!')
    }

    checkDuplicate = (nameToCheck) =>
        !this.state.persons.find(person => person.name === nameToCheck)

    render() {
        return (
            <div>
                <h2>Puhelinluettelo</h2>
                <Form
                    onSubmitCallback={this.addPerson}
                    placeHolder={'Lisättävä nimi'}
                    buttonText='Lisää'
                />
                <h2>Numerot</h2>
                <PhoneBook contacts={this.state.persons} />
            </div>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('root'));
