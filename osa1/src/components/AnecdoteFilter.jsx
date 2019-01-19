import React from 'react'
import { setFilter } from '../reducers/visibilityFilter'

const AnecdoteFilter = ({ store }) => {
    const style = {
        marginBottom: 10
    }

    return (
        <div style={style}>
            Filter {' '}
            <input
                placeholder='Filter'
                onChange={(event) => store.dispatch(setFilter(event.target.value))}
            />
        </div>
    )
}

export default AnecdoteFilter
