import React from 'react'

const Notification = ({ store }) => {
    const message = store.getState().notification
    const style = {
        border: 'solid',
        padding: 10,
        borderWidth: 5,
        display: message ? 'block' : 'none'
    }

    return (
        <div style={style}>
            {message}
        </div>
    )
}

export default Notification
