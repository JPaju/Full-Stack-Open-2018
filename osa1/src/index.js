import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const Display = ({ text }) => text

const Otsikko = ({ text }) => {
    return (
        <h1>{text}</h1>
    )
}

const Osa = ({ part }) => (
    <Display text={part.nimi + ', ' + part.tehtavia + ' tehtävää.'} />
)

const Sisalto = ({ parts }) => {
    let osat = parts.map(osa => <div key={osa.id}><Osa part={osa} key={osa.nimi} /></div>)

    return (
        <div>
            {osat}
        </div>
    )
}

const Yhteensa = ({osat}) => {
    let total = osat.reduce((sum, part) => sum += part.tehtavia, 0)

    return (
        <p>Tehtäviä yhteensä: {total}</p>
    )
}

const Kurssi = ({ kurssi }) => (
    <div>
        <Otsikko text={kurssi.nimi} />
        <Sisalto parts={kurssi.osat} />
        <Yhteensa osat={kurssi.osat}/>
    </div>
)

const App = () => {
    return (
        <div>
            <div className='Kurssi'>
                <Kurssi kurssi={hsOhjelmistokehitys} />
            </div>
        </div>
    )
}

const hsOhjelmistokehitys = {
    nimi: 'Half Stack -sovelluskehitys',
    osat: [
        {
            nimi: 'Reactin perusteet',
            tehtavia: 10,
            id: 1
        },
        {
            nimi: 'Tiedonvälitys propseilla',
            tehtavia: 7,
            id: 2
        },
        {
            nimi: 'Komponenttien tila',
            tehtavia: 14,
            id: 3
        }
    ]
}


ReactDOM.render(<App />, document.getElementById('root'));
