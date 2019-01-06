import React from 'react'
import '../styles/notification.css'

const Notification = ({ message }) => {
    if (!message)
        return null

    return (
        <div className="error">
            {message}
        </div>
    )
}

export default Notification
