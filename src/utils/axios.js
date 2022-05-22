import axios from 'axios'

const API_END_POINT = process.env.NODE_ENV === 'develop' ? 'http://localhost:3000/api' : ''

const instance = axios.create({
  baseURL: API_END_POINT
})

export default instance
