import React from 'react'
import {Display, Otsikko} from './utils'


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

const Yhteensa = ({ osat }) => {
    let total = osat.reduce((sum, part) => sum += part.tehtavia, 0)

    return (
        <p>Tehtäviä yhteensä: {total}</p>
    )
}

const Kurssi = ({ kurssi }) => (
    <div>
        <Otsikko text={kurssi.nimi} />
        <Sisalto parts={kurssi.osat} />
        <Yhteensa osat={kurssi.osat} />
    </div>
)

export default Kurssi