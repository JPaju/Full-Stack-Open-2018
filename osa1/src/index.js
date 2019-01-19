import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import reducer from './reducers/anecdoteApp'
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

                <AnecdoteFilter store={store} />
                <Notification store={store} />
                <AnecdoteList store={store} />
                <AnecdoteForm store={store} />
            </div>
        )
    }
}


const store = createStore(reducer)

const render = () => {
    ReactDOM.render(
        <App />,
        document.getElementById('root')
    )
}

render()
store.subscribe(render)
