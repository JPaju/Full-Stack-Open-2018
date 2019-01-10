import React from 'react'
import ReactDOM from 'react-dom'
import Palaute from './components/Palaute'
import './index.css'
import { createStore } from 'redux';
import feedbackReducer from './reducers/feedbackReducer';

const store = createStore(feedbackReducer)
const App = () => ( <div> <Palaute store={store} /> </div> )


const render = () => { ReactDOM.render(<App />, document.getElementById('root')) }

render()
store.subscribe(render)
