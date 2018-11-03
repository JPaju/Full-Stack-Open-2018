import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const Otsikko = (props) => {
    return(
        <h1>{props.kurssi.nimi}</h1>
    )
}

const Sisalto = (props) => {
    let osat = props.osat.map(osa => <Osa osa={osa} key={osa.nimi}/>)

    return(
        <div>
            {osat}
        </div>
    )
}
    
const Osa = (props) => {
    return(
        <li>{props.osa.nimi}, {props.osa.tehtavia} tehtävää.</li>
    )

}

const Yhteensa = (props) => {
    let tehtavienSumma = 0;
    props.osat.forEach(osa => {
       tehtavienSumma += osa.tehtavia;
   });

    return(
        <p>Tehtäviä yhteensä: {tehtavienSumma}</p>
    )
}

const App = () => {
    const kurssi = {
        nimi: 'Half Stack -sovelluskehitys',
        osat: [
            {
                nimi: 'Reactin perusteet',
                tehtavia: 10
            },
            {
                nimi :'Tiedonvälitys propseilla',
                tehtavia: 7
            }, 
            {
                nimi: 'Komponenttien tila',
                tehtavia: 14
            }
        ]
    }

    return(
        <div>
           <div className='kurssi'>
                <Otsikko kurssi={kurssi}/>
                <Sisalto osat={kurssi.osat}/>
                <Yhteensa osat={kurssi.osat}/>
            </div>
            
            <div className='counter'>
                <CounterApp interval={0.5}/>
            </div>
        </div>
    )
}

class CounterApp extends React.Component {
    constructor(props) {
        super(props)
        this.interval = props.interval * 1000 //in seconds
        this.state = {
            counter: 0
        }
        
        setInterval(() => {
            this.setState({counter: this.state.counter + 1})
        }, this.interval)
    }

    render() {
        return(
            <div>
                <h2>Counter, interval</h2>
                <div>{this.state.counter}</div>
            </div>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('root'));
