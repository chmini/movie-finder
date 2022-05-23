import axios from 'axios'
import express from 'express'

const app = express()

const API_END_POINT = 'https://www.omdbapi.com'

app.get('/api/movie', async (req, res) => {
  const {
    query: { search }
  } = req

  const { data } = await axios.get(`${API_END_POINT}/?apikey=${process.env.API_KEY}&s=${search}`)

  if (data.Response === 'False') {
    res.status(404).send(data)
    return
  }

  res.status(200).send(data)
})

app.get('/api/movie/:id', async (req, res) => {
  const {
    params: { id }
  } = req

  const { data } = await axios.get(`${API_END_POINT}/?apikey=${process.env.API_KEY}&i=${id}`)

  if (data.Response === 'False') {
    res.status(400).send(data)
    return
  }

  res.status(200).send(data)
})

export default app
