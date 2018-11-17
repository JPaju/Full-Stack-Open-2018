import React from 'react';
import ReactDOM from 'react-dom';
import FilterForm from './components/FilterForm'
import Countries from './components/Countries'
import './index.css';


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            countries: [],
            filter: ''
        }
    }

    fetchCountries = () => {
        fetch('https://restcountries.eu/rest/v2/all')
            .then(response => response.json())
            .then(countries => this.setState({ countries }))
    }

    componentDidMount = () => this.fetchCountries()

    render = () => (
        <div>
            <h1>Find countries</h1>
            <FilterForm onChangeCallback={(filter) => this.setState({ filter })} /><br />
            <Countries countries={this.state.countries} filter={this.state.filter} />
        </div>
    )
}


ReactDOM.render(<App />, document.getElementById('root'));
