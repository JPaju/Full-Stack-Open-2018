import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import './index.css'
import AnecdotesApp from './components/AnecdotesApp';

ReactDOM.render(
    <Provider store={store}>
        <AnecdotesApp />
    </Provider>,
    document.getElementById('root')
)
