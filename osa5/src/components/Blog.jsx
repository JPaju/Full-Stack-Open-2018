import React from "react"

class Blog extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            collapsed: true
        }
    }

    expandedBlog = () => {
        const blog = this.props.blog
        return (
            <div className='expandedBlog'>
                <i>{blog.title}</i>, by {blog.author} <br />
                <a href={blog.url} target="_blank" rel="noopener noreferrer">
                    {blog.url}
                </a> <br />
                {blog.likes} likes <button onClick={this.props.like}>like</button>{" "}
                <br />
                Added by {blog.user.name} <br />
                {this.props.deletable && <button onClick={this.props.delete}>Delete</button>}
                <button onClick={this.toggleCollapsed}>Collapse</button>
            </div>
        )
    }

    collapsedBlog = () => {
        const blog = this.props.blog
        return (
            <div onClick={this.toggleCollapsed} className='collapsedBlog'>
                <i>{blog.title}</i>, by {blog.author}
            </div>
        )
    }

    toggleCollapsed = () => {
        this.setState({ collapsed: !this.state.collapsed })
    }

    render = () => {
        const blogStyle = {
            paddingTop: 10,
            paddingLeft: 2,
            border: "solid",
            borderWidth: 1,
            marginBottom: 5
        }

        return (
            <div style={blogStyle} className='wrapper'>
                {this.state.collapsed ? this.collapsedBlog() : this.expandedBlog()}
            </div>
        )
    }
}

export default Blog
