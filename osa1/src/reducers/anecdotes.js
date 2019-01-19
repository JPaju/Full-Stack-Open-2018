import { getAll, modify, create } from '../services/anecdoteService'


const anecdoteReducer = (state = [], action) => {

    switch (action.type) {
        case 'LIKE_ANECDOTE': {
            const id = action.data.id
            const anecdoteToLike = state.find(a => a.id === id)
            const likedAnecdote = { ...anecdoteToLike, votes: anecdoteToLike.votes + 1 }
            return state.map(a => a.id === id ? likedAnecdote : a)
        }
        case 'NEW_ANECDOTE': {
            return state.concat({ ...action.data })
        }
        case 'MODIFY_ANECDOTE': {
            const { id } = action.data
            return state.map(a => a.id === id ? action.data : a)
        }
        case 'INIT_ANECDOTES': {
            return action.anecdotes
        }
        default: {
            return state
        }
    }
}


const anecdoteCreation = (content) => {
    return async (dispatch) => {
        const response = await create(content)
        dispatch({
            type: 'NEW_ANECDOTE',
            data: response
        })
    }
}

const anecdoteModifying = (modifiedAnecdote) => {
    return async (dispatch) => {
        const response = await modify(modifiedAnecdote)
        dispatch({
            type: 'MODIFY_ANECDOTE',
            data: response
        })
    }
}

const anecdoteInitalization = () => {
    return async (dispatch) => {
        const anecdotes = await getAll()
        dispatch({
            type: 'INIT_ANECDOTES',
            anecdotes
        })
    }
}

export default anecdoteReducer
export { anecdoteCreation, anecdoteModifying, anecdoteInitalization }