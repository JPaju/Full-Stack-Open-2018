import React from 'react'
import { shallow } from 'enzyme'
import Blog from './Blog'

describe('<Blog />', () => {
    let blogComponent
    const blog = {
        title: 'Testing with enzyme',
        author: 'Enzyme Test',
        url: 'http://mock.test',
        likes: 34,
        user: { name: 'Mock Test'}
    }

    beforeEach(() => {
        blogComponent = shallow(<Blog blog={blog} />)
    })
    
    it('by default only displays title and author', () => {

        const collapsedBlog = blogComponent.find('.collapsedBlog')

        expect(collapsedBlog.text()).toContain(blog.title)
        expect(collapsedBlog.text()).toContain('by', blog.author)

        expect(collapsedBlog.text()).not.toContain(blog.url)
        expect(collapsedBlog.text()).not.toContain(blog.likes, 'likes')
    })

    it('after clicked, displays full content', () => {

        blogComponent.find('.collapsedBlog').simulate('click')
        const expandedBlog = blogComponent.find('.expandedBlog')

        expect(expandedBlog.text()).toContain(blog.title)
        expect(expandedBlog.text()).toContain('by', blog.author)
        expect(expandedBlog.text()).toContain(blog.url)
        expect(expandedBlog.text()).toContain(blog.likes, 'likes')
    })
})