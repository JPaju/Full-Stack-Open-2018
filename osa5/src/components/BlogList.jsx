import React from 'react'
import Blog from './Blog'


const BlogList = ({ blogs, currentUser, updateBlogs, likeBlog, deleteBlog }) => {
    return (
        <div>
            <h2>Bloglist</h2>
            {blogs
                .sort((a, b) => b.likes - a.likes)
                .map(blog =>
                    <Blog
                        key={blog._id}
                        blog={blog}
                        like={likeBlog(blog)}
                        deletable={currentUser && currentUser._id === blog.user._id}
                        delete={deleteBlog(blog)}
                    />
                )}

            <button onClick={updateBlogs}>Update</button>
        </div>
    )
}

export default BlogList
