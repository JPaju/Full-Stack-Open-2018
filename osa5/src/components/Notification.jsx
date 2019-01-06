import React from 'react'
import '../styles/notification.css'

const Notification = ({ message, type = 'info' }) => {
    if (!message) return null

    return (
        <div className={type}>
            {message}
        </div>
    )
}

Notification.defaultProps = {
    type: 'info' // 'error' also supported
}

export default Notification
