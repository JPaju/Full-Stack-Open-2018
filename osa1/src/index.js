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
            <Osa osa={props.osa1}/>
            <Osa osa={props.osa2}/>
            <Osa osa={props.osa3}/>
        </div>
    )
}
    
const Osa = (props) => {
    return(
        <p>{props.osa.nimi}, {props.osa.tehtavia} tehtävää.</p>
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
    const kurssi = 'Half Stack -sovelluskehitys'
    
    const osa1 = {
        nimi: 'Reactin perusteet',
        tehtavia: 10
    }
    const osa2 = {
        nimi :'Tiedonvälitys propseilla',
        tehtavia: 7
    } 
    const osa3 = {
        nimi: 'Komponenttien tila',
        tehtavia: 14
    }


    return(
        <div>
            <Otsikko otsikko={kurssi}/>
            <Sisalto osa1={osa1} osa2={osa2} osa3={osa3}/>
            <Yhteensa osat={[osa1, osa2, osa3]}/>
        </div>
    )
}


ReactDOM.render(<App />, document.getElementById('root'));
