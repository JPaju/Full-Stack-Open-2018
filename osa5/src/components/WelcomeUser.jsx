import React from 'react'
import PropTypes from 'prop-types'


const WelcomeUser = ({ name, logoutCallBack }) => {
    return (
        <div>
            Welcome {name}
            <button onClick={logoutCallBack}>Logout</button>
        </div>
    )
}

WelcomeUser.propTypes = {
    name: PropTypes.string.isRequired,
    logoutCallBack: PropTypes.func.isRequired
}

export default WelcomeUser
