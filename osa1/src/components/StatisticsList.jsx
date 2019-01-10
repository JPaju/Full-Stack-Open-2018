import React from 'react'
import Statistic from './Statistic'
import Display from './Display'


class StatisticsList extends React.Component{
    constructor(props) {
        super(props)
        this.store = props.store
    }
    
    countAverage = () => {
        const feedback = this.store.getState().feedback
        const summa = ((feedback.positive*1) + (feedback.negative * -1))
        return (summa / this.feedbackCount()).toFixed(1)
    }
    
    positivePercentage = () => {
        const feedback = this.store.getState().feedback
        return (feedback.positive/this.feedbackCount() * 100).toFixed(1)
    }
    
    feedbackCount = () => {
        return Object.values(this.store.getState().feedback).reduce((a,b) => {return a + b})
    }
    
    render = () => {
        const feedback = this.store.getState().feedback
        return(
            <div>
                <h2>Statistics</h2>
                {this.feedbackCount() ? (
                    <table>
                        <tbody>
                            <Statistic name='Hyvä' value={feedback.positive}/>
                            <Statistic name='Neutraali' value={feedback.neutral}/>
                            <Statistic name='Huono' value={feedback.negative}/>
                            <Statistic name='Palautetta yhteensä' value={this.feedbackCount()}/>
                            <Statistic name='Keskiarvo' value={this.countAverage()}/>
                            <Statistic name='Positiivisia' value={this.positivePercentage() + '%'}/>
                        </tbody>
                    </table>
                ) : (
                    <Display text='Yhtään palautetta ei ole annettu vielä.'/>
                )}
            </div>
        )
    }
}
export default StatisticsList
