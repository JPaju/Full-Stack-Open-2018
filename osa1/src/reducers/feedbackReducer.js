const defaultState = {
    feedback: {
        positive: 0,
        negative: 0,
        neutral: 0
    }
}

const feedbackReducer = (state = defaultState, action) => {
    const feedback = state.feedback

    switch (action.type) {
        case 'POSITIVE':
            return { ...state, feedback: { ...feedback, positive: feedback.positive +1 }}
        case 'NEGATIVE':
            return { ...state, feedback: { ...feedback, negative: feedback.negative +1 } }
        case 'NEUTRAL':
            return { ...state, feedback: { ...feedback, neutral: feedback.neutral +1 } }
        default:
            return state
    }
}

export default feedbackReducer