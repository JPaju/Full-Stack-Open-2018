import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import './index.css'

import Notification from './components/Notification'
import AnecdoteList from './components/AnecdoteList'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteFilter from './components/AnecdoteFilter'

class App extends React.Component {
    render = () => {
        return (
            <div>
                <h1>Anecdotes</h1>

                <AnecdoteFilter />
                <Notification />
                <AnecdoteList />
                <AnecdoteForm />
            </div>
        )
    }
}


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
