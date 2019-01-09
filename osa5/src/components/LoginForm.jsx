import React from 'react'


class LoginForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            error: props.error
        }
        this.loginCallBack = props.loginCallBack
    }

    login = (event) => {
        event.preventDefault()
        this.loginCallBack({ ...this.state })
        this.setState({ username: '', password: '' })
    }

    handleLoginformChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }


    render = () => (
        <div>
            <h2>Login</h2>

            <form onSubmit={this.login} className='loginForm'>
                <div>
                    Username 
                    <input
                        type='text'
                        name='username'
                        placeholder='Username'
                        value={this.state.username}
                        onChange={this.handleLoginformChange}
                    />
                </div>
                <div>
                    Password
                    <input
                        type='text'
                        name='password'
                        placeholder='Password'
                        value={this.state.password}
                        onChange={this.handleLoginformChange}
                    />
                </div>

                <button>Log in</button>

            </form>
        </div>
    )
}

export default LoginForm
