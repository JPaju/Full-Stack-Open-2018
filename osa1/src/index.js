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
        <div>
            <Osa osa={props.osa1} tehtavia={props.t1}/>
            <Osa osa={props.osa2} tehtavia={props.t2}/>
            <Osa osa={props.osa3} tehtavia={props.t3}/>
        </div>
    )
}
    
const Osa = (props) => {
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
            <Sisalto osa1={osa1} osa2={osa2} osa3={osa3} t1={tehtavia1} t2={tehtavia2} t3={tehtavia3}/>
            <Yhteensa yhteensa={tehtavia1 + tehtavia2 + tehtavia3}/>
        </div>
    )
}


ReactDOM.render(<App />, document.getElementById('root'));
