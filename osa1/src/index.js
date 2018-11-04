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

const Display = ({text}) => <div>{text}</div>

const Button = ({handleClick, label}) => (
    <button onClick={handleClick}>
        {label}
    </button>
)

class Palaute extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            palaute : {
                hyvä: 0,
                neutraali: 0,
                huono: 0
            }
        }
    }
    
    lisaaPalautetta = (arvo) => () => {
        let vanhaArvo = this.state.palaute
        vanhaArvo[arvo] = this.state.palaute[arvo] +1
        this.setState({palaute: vanhaArvo})
    }

    render() {
        return(
            <div>
                <div>
                    <h2>Anna Palautetta</h2>
                    <Button label='Hyvä' handleClick={this.lisaaPalautetta('hyvä')}/>
                    <Button label='Neutraali' handleClick={this.lisaaPalautetta('neutraali')}/>
                    <Button label='Huono' handleClick={this.lisaaPalautetta('huono')}/>
                </div>
                <div>
                    <Statistiikka palaute={this.state.palaute}/>
                </div>
            </div>
        )
        
    }
}

class Statistiikka extends React.Component{
    constructor(props) {
        super(props)
        this.palaute = props.palaute
    }

    countAverage = () => {
        let summa = ((this.palaute.hyvä*1) + (this.palaute.huono * -1))
        if (this.feedbackCount() === 0) {return this.feedbackCount().toFixed(1)}
        else {return (summa / this.feedbackCount()).toFixed(1)}
    }

    positivePercentage = () => {
        let count = (this.feedbackCount() === 0 ? 1 : this.feedbackCount())
        return (this.palaute.hyvä/count * 100).toFixed(1)
    }

    feedbackCount = () => {
        return Object.values(this.palaute).reduce((a,b) => {return a + b})
    }

    render = () => {
        return(
        <div>
            <h2>Statistiikka</h2>
            <Display text={'Hyvä: '+ this.palaute.hyvä}/>
            <Display text={'Neutraali: '+ this.palaute.neutraali}/>
            <Display text={'Huono: '+ this.palaute.huono}/>
            <Display text={'Keskiarvo: '+ this.countAverage()}/>
            <Display text={'Positiivisia: '+ this.positivePercentage() + '%'}/>
        </div>
        )
    }

}

ReactDOM.render(<App/>, document.getElementById('root'));
