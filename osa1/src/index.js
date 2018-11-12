import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const Otsikko = ({ kurssi }) => (
    <h1>{kurssi.nimi}</h1>
)

const Sisalto = ({ osat }) => (
    <div>
        {osat.map(osa => <Osa osa={osa} key={osa.nimi} />)}
    </div>
)

const Osa = (props) => (
    <li>{props.osa.nimi}, {props.osa.tehtavia} tehtävää.</li>
)

const Yhteensa = ({ osat }) => (
    <p>Tehtäviä yhteensä: {osat.reduce((summa, osa) => summa += osa.tehtavia)}</p>
)

class CounterApp extends React.Component {
    constructor(props) {
        super(props)
        this.state = { counter: 0 }
    }

    setCounter = (value) => () => { this.setState({ counter: value }) }

    render() {
        return (
            <div>
                <h2>Counter</h2>
                <div><Display counter={this.state.counter} /></div>

                <div>
                    <Button
                        handleClick={this.setCounter(this.state.counter + 1)}
                        label='Increase'
                    />
                    <Button
                        handleClick={this.setCounter(this.state.counter - 1)}
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

const Display = ({ counter }) => <div>{counter}</div>

const Button = ({ handleClick, label }) => (
    <button onClick={handleClick}>
        {label}
    </button>
)


ReactDOM.render(<CounterApp interval={0.5} />, document.getElementById('root'));
