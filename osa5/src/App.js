import React from 'react'

import BlogList from './components/BlogList'
import BlogForm from './components/BlogForm'
import LoginForm from './components/LoginForm'
import WelcomeUser from './components/WelcomeUser'
import Notification from './components/Notification'
import Togglable from './components/Togglable'

import blogService from './services/blogService'
import loginService from './services/loginService'


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loggedIn: false,
            user: null,
            error: '',
            blogs: []
        }
    }


    componentDidMount() {
        const savedUser = JSON.parse(window.localStorage.getItem('loggedBlogUser'))
        if (savedUser) {
            const { token, ...user } = savedUser
            blogService.setToken(token)
            this.setState({
                user,
                loggedIn: true
            })
        }

        this.fetchBlogs()
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
                        <Togglable buttonLabel='Add new blog' ref={c => this.blogForm = c}>
                            <BlogForm
                                createCallBack={() => {
                                    this.fetchBlogs()
                                    this.blogForm.toggleVisibility()
                                }}
                            />
                        </Togglable>
                    </div>
                    :
                    <div>
                        <Notification message={this.state.error} type={'error'} />
                        <Togglable buttonLabel='Log in'>
                            <LoginForm loginCallBack={this.login} error={this.state.error} />
                        </Togglable>
                    </div>
                }
                <BlogList
                    blogs={this.state.blogs}
                    currentUser={this.state.user}
                    updateBlogs={this.fetchBlogs}
                    likeBlog={this.blogLikeHandler}
                    deleteBlog={this.blogDeleteHandler}
                />
            </div>
        )
    }

    blogLikeHandler = (blog) => {
        const { likes, _id } = blog
        return (event) => {
            event.preventDefault()
            blogService
                .update(_id, { likes: likes + 1 })
                .then(() => this.fetchBlogs())
        }
    }

    blogDeleteHandler = (blog) => {
        return (event) => {
            event.preventDefault()
            const confirmed = window.confirm(`Do you want to delete ${blog.title}?`)
            if (confirmed) {
                blogService
                    .remove(blog._id)
                    .then(() => this.fetchBlogs())
            }
        }
    }

    fetchBlogs = () => {
        blogService.getAll().then(blogs => this.setState({ blogs }))
    }

    login = async ({ username, password }) => {
        try {
            const loginData = await loginService.login({ username, password })
            const { token, ...user } = loginData

            this.setState({ user, loggedIn: true })
            blogService.setToken(token)
            window.localStorage.setItem('loggedBlogUser', JSON.stringify(loginData))
        } catch (error) {
            this.setState({ error: 'Wrong username or password' })
            setTimeout(() => this.setState({ error: '' }), 3000)
        }
    }

    logOut = () => {
        window.localStorage.removeItem('loggedBlogUser')
        this.setState({ user: null, loggedIn: false })
    }
}

export default App;
