import React from 'react'

const Contact = ({contact, deleteContact}) => (
    <tr>
        <td>{contact.name}</td>
        <td>{contact.number}</td>
        <td>
            <button onClick={deleteContact}>
                Poista
            </button>
        </td>
    </tr>
)

export default Contact