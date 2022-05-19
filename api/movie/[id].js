import axios from 'axios'

const API_END_POINT = 'http://www.omdbapi.com'

export default async function handler(req, res) {
  const { id } = req.query

  try {
    const { data } = await axios.get(`${API_END_POINT}?apikey=${process.env.API_KEY}&i=${id}`)
    res.status(200).json(data)
  } catch (e) {
    console.error(e)
  }
}
