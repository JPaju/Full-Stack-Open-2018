import React from 'react'
import Contact from './Contact'


const PhoneBook = ({ contacts, filter, deleteContact }) => {

    contacts = contacts.filter(contact => contact.name.toLowerCase().startsWith(filter.toLowerCase()))

    const contactsToShow = contacts.length > 0 ?
        <table>
            <tbody>
                {contacts.map(contact =>
                    <Contact
                        key={contact.name + contact.number}
                        contact={contact}
                        deleteContact={deleteContact(contact.id)}
                    />)}
            </tbody>
        </table>
        :
        'Ei yhtään yhteystietoa'

    return contactsToShow
}

export default PhoneBook