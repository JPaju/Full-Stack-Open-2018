import React from 'react'

class Form extends React.Component {
    constructor(props) {
        super(props)
        this.onSubmitCallback = props.onSubmitCallback
        this.state = {
            value: ''
        }
    }

    onChange = (event) => {
        this.setState({ value: event.target.value })
    }

    onSubmit = (event) => {
        event.preventDefault()
        this.onSubmitCallback(this.state.value)
        this.setState({ value: '' })
    }

    render = () => (
        <form onSubmit={this.onSubmit}>
            <input
                value={this.state.value}
                onChange={this.onChange}
                placeholder='Uusi muistiinpano' />
            <button type='submit'>Tallenna</button>
        </form>
    )
}

export default Form