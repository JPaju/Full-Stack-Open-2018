import React from 'react'
import { connect } from 'react-redux'

let Notification = ({ notification }) => {
    const style = {
        border: 'solid',
        padding: 10,
        borderWidth: 5,
        marginBottom: 10,
        display: notification ? 'block' : 'none'
    }

    return (
        <div style={style}>
            {notification}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        notification: state.notification
    }
}

Notification = connect(
    mapStateToProps
)(Notification)

export default Notification
