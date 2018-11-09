import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const App = () =>{
            return(
            <div>
                <Palaute/>
            </div>
        )   
}


class Palaute extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            feedback : {
                good: 0,
                neutral: 0,
                bad: 0
            }
        }
    }
    
    addFeedback = (value) => () => {
        let oldValue = this.state.feedback
        oldValue[value] = this.state.feedback[value] +1
        this.setState({feedback: oldValue})
    }
    
    render() {
        return(
            <div>
                <div>
                    <h2>Anna Palautetta</h2>
                    <Button label='Hyvä' handleClick={this.addFeedback('good')}/>
                    <Button label='Neutraali' handleClick={this.addFeedback('neutral')}/>
                    <Button label='Huono' handleClick={this.addFeedback('bad')}/>
                </div>
                <div>
                    <Statistics feedback={this.state.feedback}/>
                </div>
            </div>
        )
        
    }
}

class Statistics extends React.Component{
    constructor(props) {
        super(props)
        this.feedback = props.feedback
    }
    
    countAverage = () => {
        let summa = ((this.feedback.good*1) + (this.feedback.bad * -1))
        return (summa / this.feedbackCount()).toFixed(1)
    }
    
    positivePercentage = () => {
        return (this.feedback.good/this.feedbackCount() * 100).toFixed(1)
    }
    
    feedbackCount = () => {
        return Object.values(this.feedback).reduce((a,b) => {return a + b})
    }
    
    render = () => (
        <div>
            <h2>Statistics</h2>
            {this.feedbackCount() ? (
                <table>
                    <tbody>
                        <Statistic name='Hyvä' value={this.feedback.good}/>
                        <Statistic name='Neutraali' value={this.feedback.neutral}/>
                        <Statistic name='Huono' value={this.feedback.bad}/>
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

const Statistic = ({name, value}) => (
        <tr>
            <td><Display text={name}/></td>
            <td><Display text={value}/></td>
        </tr>
)

const Display = ({text}) => <div>{text}</div>

const Button = ({handleClick, label}) => (
    <button onClick={handleClick}>
        {label}
    </button>
)


ReactDOM.render(<App/>, document.getElementById('root'));
