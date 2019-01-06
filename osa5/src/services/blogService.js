import axios from 'axios'
const baseUrl = '/api/blogs'

let token = 'testii'

const getAll = () => (
    axios
        .get(baseUrl)
        .then(response => response.data)
)


const create = (newObject) => {
    const header = {
        'Authorization': 'bearer ' + token
    }

    return axios.post(baseUrl, newObject, { headers: header })
}

const setToken = (newToken) => {
    token = newToken.replace('bearer ', '')
}

export default { getAll, create, setToken }