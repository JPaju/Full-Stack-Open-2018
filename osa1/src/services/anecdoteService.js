import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

const get = async (id) => {
    const response = await axios.get(`${baseUrl}/${id}`)
    return response.data
}

const create = async (content) => {
    const response = await axios.post(baseUrl, { content, votes: 0 })
    return response.data
}

const modify = async (anecdote) => {
    const url = `${baseUrl}/${anecdote.id}`
    const response = await axios.put(url, { ...anecdote })
    return response.data
}

export { getAll, get, create, modify }