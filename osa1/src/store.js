import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import anecdotes from './reducers/anecdotes'
import notification from './reducers/notification'
import visibilityFilter from './reducers/visibilityFilter'

const reducer = combineReducers({
    anecdotes,
    notification,
    visibilityFilter
})

const store = createStore(
    reducer,
    applyMiddleware(thunk)
)

export default store
