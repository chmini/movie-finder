import axios from 'axios'

const API_END_POINT = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : ''

export default {
  namespaced: true,
  state() {
    return {
      movies: [],
      currentMovie: {}
    }
  },
  mutations: {
    setMovies(state, movies) {
      state.movies = movies
    },
    setCurrentMovie(state, currentMovie) {
      state.currentMovie = currentMovie
    }
  },
  actions: {
    async getMovies({ commit }, query) {
      const { title } = query

      const { data } = await axios.get(`${API_END_POINT}/api/movie?search=${title}`)
      commit('setMovies', data.Search)
    },
    async getMovie({ commit }, payload) {
      const { id } = payload

      const { data } = await axios.get(`${API_END_POINT}/api/movie/${id}`)
      commit('setCurrentMovie', data)
    }
  }
}
