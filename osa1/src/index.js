import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const Otsikko = (props) => {
    return(
        <h1>{props.otsikko}</h1>
    )
}

const Sisalto = (props) => {
    return(
        <p>{props.osa}, {props.tehtavia} tehtävää.</p>
    )
}

const Yhteensa = (props) => {
    return(
        <p>Tehtäviä yhteensä: {props.yhteensa}</p>
    )
}

const App = () => {
    const kurssi = 'Half Stack -sovelluskehitys'
    
    const osa1 = 'Reactin perusteet'
    const osa2 = 'Tiedonvälitys propseilla'
    const osa3 = 'Komponenttien tila'

    const tehtavia1 = 10
    const tehtavia2 = 7
    const tehtavia3 = 14

    return(
        <div>
            <Otsikko otsikko={kurssi}/>
            <Sisalto osa={osa1} tehtavia={tehtavia1}/>
            <Sisalto osa={osa2} tehtavia={tehtavia2}/>
            <Sisalto osa={osa3} tehtavia={tehtavia3}/>
            <Yhteensa yhteensa={tehtavia1 + tehtavia2 + tehtavia3}/>
        </div>
    )
}


ReactDOM.render(<App />, document.getElementById('root'));
