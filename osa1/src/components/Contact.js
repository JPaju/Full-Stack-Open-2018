import React from 'react'

const Contact = ({contact}) => (
    <tr>
        <td>{contact.name}</td>
        <td>{contact.number}</td>
    </tr>
)

export default Contact