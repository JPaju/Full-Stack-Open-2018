import { createStore } from 'redux'
import reducer from './reducers/anecdoteApp'

const store = createStore(reducer)

export default store
