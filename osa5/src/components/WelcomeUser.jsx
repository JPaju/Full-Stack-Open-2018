import React from 'react'

const WelcomeUser = ({ name, logoutCallBack }) => {
    return (
        <div>
            Welcome {name}
            <button onClick={logoutCallBack}>Logout</button>
        </div>
    )
}

export default WelcomeUser
