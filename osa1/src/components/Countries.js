import React from 'react'

const Countries = ({ countries, filter, displayLimit, message }) => {

    const filteredCountries = countries.filter(country =>
        country.name.toLowerCase().includes(filter.toLowerCase()))


    const getCountryInfo = (country) => {
        return(
            <div>
                <h2>{country.name + ', ' + country.nativeName}</h2>
                Capital: {country.capital} <br/>
                Population: {country.population} <br/>
                <img src={country.flag} alt='Flag' height="120" width="180"/>
            </div>
        )
    }

    const handleCountries = () => {
        return (
            filteredCountries.length === 1 ?
            getCountryInfo(filteredCountries[0]) :
            filteredCountries.map(country =>
                <div key={country.name}>
                    {country.name}
                </div>
            )
        )
    }

    return (
        filteredCountries.length > displayLimit ?
            message :
            handleCountries()
    )
}

Countries.defaultProps = {
    displayLimit: 10,
    message: 'Too many matches, specify tighter filter'
}

export default Countries