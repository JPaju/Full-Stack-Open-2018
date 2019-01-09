import React from 'react'

const SimpleBlog = ({ blog, onClick }) => (
    <div className='wrapper'>
        <div className='basicInfo'>
            {blog.title} {blog.author}
        </div>
        <div className='likes'>
            Blog has {blog.likes} likes
            <button onClick={onClick}>Like</button>
        </div>
    </div>
)

export default SimpleBlog
