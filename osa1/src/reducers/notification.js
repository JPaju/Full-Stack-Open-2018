import store from '../store'

const notificationReducer = (state = '', action) => {
    switch (action.type) {
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

const notify = (message, timeout) => {
    return async (dispatch) => {
        dispatch(notificationCreation(message))
        setTimeout(() => store.dispatch(clearNotification()), timeout * 1000)
    }
}

export default notificationReducer
export { notificationCreation, clearNotification, notify }
