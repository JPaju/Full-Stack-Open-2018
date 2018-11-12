import React from 'react';
import ReactDOM from 'react-dom'
import Form from './components/Form'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        { name: 'Arto Hellas' }
      ]
    }
  }

  addPerson = (name) => this.setState({persons: [...this.state.persons].concat({name}) })

  render() {
    return (
      <div>
        <h2>Puhelinluettelo</h2>
        <Form
            onSubmitCallback={this.addPerson}
            placeHolder={'Lisättävä nimi'}
            buttonText='Lisää'
            />
        <h2>Numerot</h2>
        ...
      </div>
    )
  }
}


ReactDOM.render(<App/>, document.getElementById('root'));
