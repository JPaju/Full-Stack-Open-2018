import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Hello = (props) => {
    const time = new Date();
    return (
        
        <div>
            <p>Hello {props.name}, age {props.age}!</p>
            <p>Today is {time.toDateString()}, time is {time.toTimeString()}</p>
        </div>
    )
}

const App = () => {
    return(
        <div>
            <h1>Howdy!</h1>
            <Hello name="Jaakko" age="24"/>
        </div>
    )
}


ReactDOM.render(<App />, document.getElementById('root'));
