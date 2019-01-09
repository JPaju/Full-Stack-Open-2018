import React from 'react'
import { mount } from 'enzyme'
import App from './App'
import BlogList from './components/BlogList';
import Blog from './components/Blog';
import blogService from './services/blogService';
jest.mock('./services/blogService')

describe('<App />', () => {

    let app

    
    
    describe('when NOT logged in', () => {
        
        beforeAll(() => {
            app = mount(<App />)
        })
        
        beforeEach(() => {
            localStorage.clear()
            app.update()
        })
        
        it('no blogs are shown', () => {
            const blogListDiv = app.find(BlogList)
            expect(blogListDiv.exists()).toBeFalsy()
        })
        
    })
    
    describe('when logged in', () => {
        
        const user = {
            username: 'test',
            token: 'awesomeTestToken',
            name: 'Mock Tester'
        }

        beforeAll(() => {
            localStorage.setItem('loggedBlogUser', JSON.stringify(user))
            app = mount(<App />)
        })
        
        beforeEach(() => {
            app.update()
        })

        it('shows blogs', () => {
            const blogListDiv = app.find(BlogList)
            const blogComponents = app.find(Blog)

            expect(blogComponents.length).toBe(blogService.blogs.length)
            expect(blogListDiv.exists()).toBeTruthy()
        })
    })

})