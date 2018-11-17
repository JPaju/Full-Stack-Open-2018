import React from 'react';
import ReactDOM from 'react-dom'
import axios from 'axios'
import ContactForm from './components/ContactForm'
import PhoneBook from './components/PhoneBook'
import FilterForm from './components/FilterForm';


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            persons: [],
            filter: ''
        }
    }

    addContact = (contact) => {
        const newPerson = {
            name: contact.nimi,
            number: contact.numero
        }

        this.checkDuplicate(newPerson) ?
            this.setState({ persons: [...this.state.persons].concat(newPerson) }) :
            alert('Contact already exists!')
    }

    checkDuplicate = (contactToCheck) => {

        return (!this.state.persons.find((contact) => (
            contact.name === contactToCheck.name &&
            contact.number === contactToCheck.number)
        ))
    }

    filterContacts = (filter) => {
        this.setState({ filter: filter })
    }

    fetchContacts = () => {
        axios.get('http://localhost:3001/persons')
            .then(response => response.data)
            .then(persons => { this.setState({ persons }) })
            .catch(err => console.log(err))
    }

    componentDidMount = () => {
        this.fetchContacts()
    }

    render() {
        return (
            <div>
                <h1>Puhelinluettelo</h1>

                <h2>Rajaa näytettäviä yhteystietoja</h2>
                <FilterForm onChangeCallback={this.filterContacts} />

                <h2>Lisää uusi yhteystieto</h2>
                <ContactForm
                    onSubmitCallback={this.addContact}
                    buttonText='Lisää'
                /><br />

                <h2>Yhteystiedot</h2>
                <PhoneBook
                    contacts={this.state.persons}
                    filter={this.state.filter} />
            </div>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('root'));
