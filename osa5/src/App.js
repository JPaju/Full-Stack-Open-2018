import React from 'react'

import Blogs from './components/Blogs.jsx'
import LoginForm from './components/LoginForm.jsx'
import WelcomeUser from './components/WelcomeUser.jsx'
import Notification from './components/Notification.jsx'

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
            this.setState({
                user: savedUser,
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
                        <Notification message={this.state.error} />
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
                ...this.state,
                user: {
                    name: loginData.name,
                    username: loginData.username
                },
                loggedIn: true
            })
            blogService.setToken(loginData.token)
            window.localStorage.setItem('loggedBlogUser', JSON.stringify(loginData))
        } catch (error) {
            console.log('Error while logging in!')
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
