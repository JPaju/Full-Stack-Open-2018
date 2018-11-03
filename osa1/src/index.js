import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const Otsikko = (props) => {
    return(
        <h1>{props.kurssi.nimi}</h1>
    )
}

const Sisalto = (props) => {
    let osat = props.osat.map(osa => <Osa osa={osa}/>)

    return(
        <div>
            {osat}
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
            <Otsikko kurssi={kurssi}/>
            <Sisalto osat={kurssi.osat}/>
            <Yhteensa osat={kurssi.osat}/>
        </div>
    )
}


ReactDOM.render(<App />, document.getElementById('root'));
