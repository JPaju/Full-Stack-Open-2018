import React from 'react'
import { connect } from 'react-redux'

import Notification from './Notification'
import AnecdoteList from './AnecdoteList'
import AnecdoteForm from './AnecdoteForm'
import AnecdoteFilter from './AnecdoteFilter'
import { anecdoteInitalization } from '../reducers/anecdotes'

class AnecdotesApp extends React.Component {

    componentDidMount = async () => {
        this.props.anecdoteInitalization()
    }

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

export default connect(
    null,
    { anecdoteInitalization }
)(AnecdotesApp)