const notificationReducer = (state = '', action) => {
    switch(action.type) {
        case 'ADD_NOTIFICATION': {
            return action.message
        }
        case 'CLEAR_NOTIFICATION': {
            return ''
        }
        default:
            return state
    }
}

const notificationCreation = (message) => {
    return {
        type: 'ADD_NOTIFICATION',
        message
    }
}

const clearNotification = () => {
    return {
        type: 'CLEAR_NOTIFICATION'
    }
}

const addNotification = (message, timeout, store) => {
    store.dispatch(notificationCreation(message))
    setTimeout(() => store.dispatch(clearNotification()), timeout * 1000)
}

export default notificationReducer
export { notificationCreation, clearNotification, addNotification }
