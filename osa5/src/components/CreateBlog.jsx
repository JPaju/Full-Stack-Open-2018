import React from 'react'
import Notification from './Notification'
import blogService from '../services/blogService'


class CreateBlog extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            author: '',
            url: '',
            notification: '',
            type: undefined
        }
        this.createdCallBack = props.createCallBack
    }

    handleBlogformChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    createBlog = async (event) => {
        event.preventDefault()
        try {
            await blogService.create({
                title: this.state.title,
                author: this.state.author,
                url: this.state.url,
            })
            this.createdCallBack()
            this.setState({ 
                notification: `Blog ${this.state.title} by ${this.state.author} added succesfully!`,
                title: '',
                author: '',
                url: '',
            })
            setTimeout(() => this.setState({ notification: '' }), 5000);
        } catch (error) {
            this.setState({ notification: 'Could not add blog!', type: 'error' })
            setTimeout(() => this.setState({ notification: '', type: undefined }), 5000);
        }
    }

    render = () => (
        <div>
            <h2>Create new blog</h2>

            <Notification message={this.state.notification} type={this.state.type}/>

            <form onSubmit={this.createBlog}>
                <div>
                    Title
                    <input
                        name='title'
                        placeholder='Title'
                        value={this.state.title}
                        onChange={this.handleBlogformChange}
                    />
                </div>
                <div>
                    Author
                    <input
                        name='author'
                        placeholder='Author'
                        value={this.state.author}
                        onChange={this.handleBlogformChange}
                    />
                </div>
                <div>
                    URL
                    <input
                        name='url'
                        placeholder='URL'
                        value={this.state.url}
                        onChange={this.handleBlogformChange}
                    />
                </div>

                <button>Create</button>
            </form>
        </div>
    )
}

export default CreateBlog
