import axios from 'axios'
const baseUrl = '/api/blogs'

let token = 'testii'

const getAll = () => {
    return (
        axios
            .get(baseUrl)
            .then(response => response.data)
    )
}

const create = (newObject) => {
    console.log('create', token)
    const header = {
        Authorization: token
    }

    return axios.post(baseUrl, newObject, header)
}

const setToken = async (newToken) => {
    token = `bearer ${newToken}`
    console.log('Set token to:', token)
}

export default { getAll, setToken }