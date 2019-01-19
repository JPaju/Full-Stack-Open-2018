import React from 'react'
import { connect } from 'react-redux'
import { setFilter } from '../reducers/visibilityFilter'

const AnecdoteFilter = ({ setFilter }) => {
    const style = {
        marginBottom: 10
    }

    return (
        <div style={style}>
            Filter {' '}
            <input
                placeholder='Filter'
                onChange={(event) => setFilter(event.target.value)}
            />
        </div>
    )
}

export default connect(
    null,
    { setFilter }
)(AnecdoteFilter)
