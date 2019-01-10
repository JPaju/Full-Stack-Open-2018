import React from 'react'
import Button from './Button'
import StatisticsList from './StatisticsList'


class Palaute extends React.Component {
    constructor(props) {
        super(props)
        this.store = props.store
        this.state = {
            feedback: {
                good: 0,
                neutral: 0,
                bad: 0
            }
        }
    }

    addFeedback = (value) => () => {
        let oldValue = this.state.feedback
        oldValue[value] = this.state.feedback[value] + 1
        this.setState({ feedback: oldValue })
    }

    render() {
        return (
            <div>
                <div>
                    <h2>Anna Palautetta</h2>
                    <Button label='Hyvä' handleClick={e => this.store.dispatch({ type: 'POSITIVE' })} />
                    <Button label='Neutraali' handleClick={e => this.store.dispatch({ type: 'NEUTRAL' })} />
                    <Button label='Huono' handleClick={e => this.store.dispatch({ type: 'NEGATIVE' })} />
                </div>
                <div>
                    <StatisticsList store={this.store} />
                </div>
            </div>
        )

    }
}

export default Palaute