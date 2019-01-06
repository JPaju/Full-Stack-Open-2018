import React from 'react'

import Blogs from './components/Blogs'
import LoginForm from './components/LoginForm'
import WelcomeUser from './components/WelcomeUser'
import Notification from './components/Notification'

import blogService from './services/blogService'
import loginService from './services/loginService'


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loggedIn: false,
            user: null,
            error: ''
        }
    }

    componentDidMount() {
        const savedUser = JSON.parse(window.localStorage.getItem('loggedBlogUser'))
        if (savedUser) {
            const { token, ...user } = savedUser

            console.log('savedUser:', savedUser)
            console.log('user:', user)
            console.log('token:', token)

            blogService.setToken(token)
            this.setState({
                user,
                loggedIn: true
            })
        }
    }


    render() {
        return (
            <div>
                <h1>Blogs</h1>
                {this.state.loggedIn ?
                    <div>
                        <WelcomeUser
                            name={this.state.user.name}
                            logoutCallBack={this.logOut}
                        />
                        <Blogs />
                    </div>
                    :
                    <div>
                        <Notification message={this.state.error} type={'error'}/>
                        <LoginForm loginCallBack={this.login} error={this.state.error} />
                    </div>
                }
            </div>
        )
    }

    login = async ({ username, password }) => {
        try {
            const loginData = await loginService.login({ username, password })
            this.setState({
                user: {
                    name: loginData.name,
                    username: loginData.username
                },
                loggedIn: true
            })
            blogService.setToken(loginData.token)
            window.localStorage.setItem('loggedBlogUser', JSON.stringify(loginData))
        } catch (error) {
            this.setState({ error: 'Wrong username or password' })
            setTimeout(() => this.setState({ error: '' }), 3000)
        }
    }

    logOut = () => {
        window.localStorage.removeItem('loggedBlogUser')
        this.setState({ ...this.state, user: null, loggedIn: false })
    }
}

export default App;
