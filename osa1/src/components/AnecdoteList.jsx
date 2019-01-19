import React from 'react'
import Anecdote from './Anecdote'
import { likeAnecdote } from '../reducers/anecdotes'
import { addNotification } from '../reducers/notification'
import TopAnecdote from './TopAnecdote'

class AnecdoteList extends React.Component {
    constructor(props) {
        super(props)
        this.store = this.props.store
    }

    onLikeClick = (anecdote) => () => {
        this.store.dispatch(likeAnecdote(anecdote.id))
        addNotification(`You voted '${anecdote.text}'`, 3, this.store)
    }

    getVisibleAnecdotes = (anecdotes, filter) => {
        return (filter === '') ?
            anecdotes :
            anecdotes
                .filter(a =>
                    a.text.toLowerCase()
                        .includes(filter.toLowerCase()))
    }

    findMostVoted = () => {
        return this.store.getState().anecdotes.reduce((max, x) => max.votes > x.votes ? max : x, { votes: -1 })
    }

    render = () => {
        const { anecdotes, visibilityFilter } = this.props.store.getState()

        return (
            <div>
                {this.getVisibleAnecdotes(anecdotes, visibilityFilter)
                    .sort((a, b) => b.votes - a.votes)
                    .map(a =>
                        <Anecdote
                            anecdote={a}
                            clickHandler={this.onLikeClick(a)}
                            key={a.id}
                        />
                    )}

                <TopAnecdote anecdote={this.findMostVoted()} />
            </div>
        )
    }
}



export default AnecdoteList
