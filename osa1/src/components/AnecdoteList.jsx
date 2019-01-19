import React from 'react'
import { connect } from 'react-redux'
import { anecdoteModifying } from '../reducers/anecdotes'
import { notify } from '../reducers/notification'
import Anecdote from './Anecdote'
import TopAnecdote from './TopAnecdote'

class AnecdoteList extends React.Component {

    likeAnecdote = (anecdote) => async () => {
        this.props.notify(`You voted '${anecdote.content}'`, 3)
        this.props.anecdoteModifying({ ...anecdote, votes: ++anecdote.votes })
    }

    render = () => {
        const {
            visibleAnecdotes,
            topAnecdote
        } = this.props

        return (
            <div>
                {visibleAnecdotes
                    .sort((a, b) => b.votes - a.votes)
                    .map(a =>
                        <Anecdote
                            anecdote={a}
                            clickHandler={this.likeAnecdote(a)}
                            key={a.id}
                        />
                    )}

                {topAnecdote && <TopAnecdote anecdote={topAnecdote} />}
            </div>
        )

    }
}

const getVisibleAnecdotes = (anecdotes, filter) => {
    return (filter === '') ?
        anecdotes :
        anecdotes
            .filter(a =>
                a.content.toLowerCase()
                    .includes(filter.toLowerCase()))
}

const findMostVoted = (anecdotes) => {
    const a = anecdotes.reduce((max, x) =>
        (max.votes > x.votes ? max : x), { votes: -1 }
    )
    return (a.votes > 0) ? a : undefined
}

const mapStateToProps = (state) => {
    return {
        visibleAnecdotes: getVisibleAnecdotes(state.anecdotes, state.visibilityFilter),
        topAnecdote: findMostVoted(state.anecdotes)
    }
}

const mapDispatchToProps = {
    anecdoteModifying,
    notify
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AnecdoteList)

