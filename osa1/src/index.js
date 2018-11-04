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
                    <h2>Statistiikka</h2>
                    <Display text={'Hyvä: '+ this.state.palaute.hyvä}/>
                    <Display text={'Neutraali: '+ this.state.palaute.neutraali}/>
                    <Display text={'Huono: '+ this.state.palaute.huono}/>
                </div>
            </div>
        )

    }
}


class CounterApp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {text: 0}
    }

    setCounter = (value) => () => {this.setState({text: value})}

    render() {
        return(
            <div>
                <h2>Counter</h2>
                <div><Display text={this.state.text}/></div>
                
                <div>
                    <Button
                        handleClick={this.setCounter(this.state.text + 1)}
                        label='Increase'
                    />
                    <Button
                        handleClick={this.setCounter(this.state.text - 1)}
                        label='Decrease'
                    />
                    <Button
                        handleClick={this.setCounter(0)}
                        label='Reset'
                    />
                </div>
            </div>
        )
    }
}

const Display = ({text}) => <div>{text}</div>

const Button = ({handleClick, label}) => (
    <button onClick={handleClick}>
        {label}
    </button>
)


ReactDOM.render(<App/>, document.getElementById('root'));
