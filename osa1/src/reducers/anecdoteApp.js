import { combineReducers } from 'redux'
import anecdotes from './anecdotes'
import notification from './notification'
import visibilityFilter from './visibilityFilter'

const reducer = combineReducers({
    anecdotes,
    notification,
    visibilityFilter
})

export default reducer
