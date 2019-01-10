import deepFreeze from 'deep-freeze'
import feedbackReducer from './feedbackReducer'

describe('feedbackReducer', () => {

    const initialState = {
        feedback: {
            positive: 0,
            negative: 0,
            neutral: 0
        }
    }

    it('returns initial state if called with undefined state', () => {
        const action = { type: 'DO_NOTHING' }
        const newState = feedbackReducer(undefined, action)

        expect(newState).toEqual(initialState)
    })

    it('Positive is incremented', () => {
        const action = { type: 'POSITIVE'}
        const state = initialState

        deepFreeze(state)
        const newState = feedbackReducer(state, action)

        expect(newState.feedback).toEqual({ ...state.feedback, positive: state.feedback.positive+1})
    })
    
    it('negative is incremented', () => {
        const action = { type: 'NEGATIVE'}
        const state = initialState

        deepFreeze(state)
        const newState = feedbackReducer(state, action)

        expect(newState.feedback).toEqual({ ...state.feedback, negative: state.feedback.negative+1})
    })
    
    it('neutral is incremented', () => {
        const action = { type: 'NEUTRAL'}
        const state = initialState

        deepFreeze(state)
        const newState = feedbackReducer(state, action)

        expect(newState.feedback).toEqual({ ...state.feedback, neutral: state.feedback.positive+1})
    })
})