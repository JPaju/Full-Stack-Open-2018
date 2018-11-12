import React from 'react'

const PhoneBook = ({ contacts }) => {

    return (
        <ul>
            {contacts.map(contact => <li key={contact.name}>{contact.name}</li>)}
        </ul>
    )
}

export default PhoneBook