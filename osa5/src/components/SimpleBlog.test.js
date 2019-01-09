import React from 'react'
import { shallow } from 'enzyme'
import SimpleBlog from './SimpleBlog'

describe.only('<SimpleBlog />', () => {
    
    it('renders blog', () => {
        const blog = {
            title: 'Testing with enzyme',
            author: 'Jest Test',
            likes: 34
        }
        const SimpleBlogComponent = shallow(<SimpleBlog blog={blog} />)
        const basicInfoDiv = SimpleBlogComponent.find('.basicInfo')
        const likeDiv = SimpleBlogComponent.find('.likes')

        expect(basicInfoDiv.text()).toContain(blog.title)
        expect(basicInfoDiv.text()).toContain(blog.author)

        expect(likeDiv.text()).toContain('Blog has', blog.likes, 'likes')
    })

    it('two button clicks call event handler twice', () => {
        const blog = {
            title: 'Testing with enzyme',
            author: 'Jest Test',
            likes: 34
        }
        const mockHandler = jest.fn()

        const SimpleBlogComponent = shallow(
            <SimpleBlog
                blog={blog}
                onClick={mockHandler}
            />
        )

        const button = SimpleBlogComponent.find('button')
        button.simulate('click')
        button.simulate('click')

        expect(mockHandler.mock.calls.length).toBe(2)
    })
})