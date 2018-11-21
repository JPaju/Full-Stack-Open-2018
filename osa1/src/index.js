import React from 'react';
import ReactDOM from 'react-dom'
import ContactForm from './components/ContactForm'
import PhoneBook from './components/PhoneBook'
import FilterForm from './components/FilterForm';
import contactService from './services/contacts'


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            contacts: [],
            filter: ''
        }
    }

    addContact = (contact) => {
        const newPerson = {
            name: contact.nimi,
            number: contact.numero
        }

        if (this.isDuplicate(newPerson) &&
            window.confirm(`${newPerson.name} on jo luettelossa, korvataanko numero uudella?`)) {
                const id = this.state.contacts.find(c => c.name === newPerson.name).id
                contactService.update(id, newPerson)
                    .then(response => this.fetchContacts())
                return
        }

        contactService.create(newPerson)
            .then(response => this.fetchContacts())
    }

    removeContact = (id) => () => {
        const name = this.state.contacts
            .find(contact => contact.id === id).name

        if (window.confirm(`Poistetaanko ${name}?`)) {
            contactService.remove(id)
                .then(response => this.fetchContacts())
                .catch(err => console.log(err))
        }
    }

    isDuplicate = (contactToCheck) => (
        this.state.contacts.find((contact) => contact.name === contactToCheck.name)
    )

    filterContacts = (filter) => {
        this.setState({ filter: filter })
    }

    fetchContacts = () => {
        contactService.getAll()
            .then(contacts => this.setState({ contacts }))
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
                    contacts={this.state.contacts}
                    filter={this.state.filter}
                    deleteContact={this.removeContact} />
            </div>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('root'));
