import axios from 'axios'

const API_END_POINT = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : ''

const instance = axios.create({
  baseURL: API_END_POINT
})

export default instance
