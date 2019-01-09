import axios from 'axios'
const baseUrl = '/api/blogs'

let token

const getAll = () => (
    axios
        .get(baseUrl)
        .then(response => response.data)
        //.catch(err => console.log(err))
)

const create = (newObject) => {
    const header = { 'Authorization': 'bearer ' + token }
    return axios.post(baseUrl, newObject, { headers: header })
}

const update = (id, updatedBlog) => {
    const url = `${baseUrl}/${id}`
    return axios.put(url, updatedBlog)
}

const remove = (id) => {
    const header = { 'Authorization': 'bearer ' + token }
    const url = `${baseUrl}/${id}`
    return axios.delete(url, { headers: header })
}

const setToken = (newToken) => {
    token = newToken.replace('bearer ', '')
}

export default { getAll, create, update, remove, setToken }