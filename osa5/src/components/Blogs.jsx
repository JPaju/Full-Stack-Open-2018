import React from 'react'
import Blog from './Blog'
import blogService from '../services/blogService'


class Blogs extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            blogs: []
        }
    }

    fetchBlogs = () => {
        blogService.getAll().then(blogs =>
            this.setState({ blogs })
        )
    }

    componentDidMount() {
        this.fetchBlogs()
    }

    render() {
        return (
            <div>
                <h2>Bloglist</h2>
                {this.state.blogs.map(blog =>
                    <Blog key={blog._id} blog={blog} />
                )}
            </div>
        )
    }
}

export default Blogs
