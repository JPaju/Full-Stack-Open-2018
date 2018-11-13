import React from 'react'

class ContactForm extends React.Component {
    constructor(props) {
        super(props)
        this.onSubmitCallback = props.onSubmitCallback
        this.placeHolder = props.placeHolder
        this.buttonText = props.buttonText
        this.fields = props.fields
        this.state = {
            value: {
                nimi: '',
                numero: ''
            }
        }
    }

    onChangeHandler = (type) => (event) => {
            const newValue = this.state.value
            newValue[type] = event.target.value
            this.setState({ value: newValue})
    }
    
    onSubmit = (event) => {
        event.preventDefault()
        this.onSubmitCallback(this.state.value)
        this.setState({ value: {nimi: '', numero: ''} })
    }

    render = () => (
        <form onSubmit={this.onSubmit}>
            <input
                value={this.state.value.nimi}
                onChange={this.onChangeHandler('nimi')}
                placeholder='Nimi' />
            <br />

            <input
                value={this.state.value.numero}
                onChange={this.onChangeHandler('numero')}
                placeholder='Numero' />
            <br />
            <button type='submit'>{this.buttonText}</button>
        </form>
    )
}

ContactForm.defaultProps = {
    buttonText: 'Submit',
    placeHolder: 'Value',
}

export default ContactForm