import React from 'react'
import { connect } from 'react-redux'
import Anecdote from './Anecdote'
import { likeAnecdote } from '../reducers/anecdotes'
import { addNotification } from '../reducers/notification'
import TopAnecdote from './TopAnecdote'

const AnecdoteList = ({
    visibleAnecdotes,
    topAnecdote,
    likeAnecdote
}) => {
    return (
        <div>
            {visibleAnecdotes.map(a =>
                <Anecdote
                    anecdote={a}
                    clickHandler={() => {
                        likeAnecdote(a.id)
                        addNotification(`You voted '${a.text}'`, 3)
                    }}
                    key={a.id}
                />
            )}

            <TopAnecdote anecdote={topAnecdote} />
        </div>
    )
}

const getVisibleAnecdotes = (anecdotes, filter) => {
    return (filter === '') ?
        anecdotes :
        anecdotes
            .filter(a =>
                a.text.toLowerCase()
                    .includes(filter.toLowerCase()))
}

const findMostVoted = (anecdotes) => {
    return anecdotes.reduce((max, x) =>
        max.votes > x.votes ? max : x, { votes: -1 }
    )
}

const mapStateToProps = (state) => {
    return {
        visibleAnecdotes: getVisibleAnecdotes(state.anecdotes, state.visibilityFilter),
        topAnecdote: findMostVoted(state.anecdotes)
    }
}


export default connect(
    mapStateToProps,
    { likeAnecdote }
)(AnecdoteList)

