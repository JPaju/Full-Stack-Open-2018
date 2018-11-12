import React from 'react';
import ReactDOM from 'react-dom'
import ContactForm from './components/ContactForm'
import PhoneBook from './components/PhoneBook'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            persons: [
                { name: 'Arto Hellas', number: '040-123456' },
                { name: 'Martti Tienari', number: '040-123456' },
                { name: 'Arto Järvinen', number: '040-123456' },
                { name: 'Lea Kutvonen', number: '040-123456' }
            ]
        }
    }

    addPerson = (person) => {
        const newPerson = {
            name: person.nimi,
            number: person.numero
        }

        this.checkDuplicate(newPerson) ?
            this.setState({ persons: [...this.state.persons].concat(newPerson) }) :
            alert('Contact already exists!')
    }

    checkDuplicate = (personToCheck) => {

        return (!this.state.persons.find((person) => (
            person.name === personToCheck.name &&
            person.number === personToCheck.number)
        ))
    }

    render() {
        return (
            <div>
                <h1>Puhelinluettelo</h1>
                <ContactForm
                    onSubmitCallback={this.addPerson}
                    buttonText='Lisää'
                /><br />
                <h2>Yhteystiedot</h2>
                <PhoneBook contacts={this.state.persons} />
            </div>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('root'));
