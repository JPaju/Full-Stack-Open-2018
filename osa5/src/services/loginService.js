import axios from 'axios'
const loginUrl = '/api/login'

const login = (creds) => {
    return axios.post(loginUrl, creds)
        .then(response => response.data)
}

export default { login }
