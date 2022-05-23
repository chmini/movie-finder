import axios from '~/utils/axios'

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
    async getMovies({ commit }, payload) {
      const { data } = await axios.get('/api/movie', { params: payload })
      if (data) commit('setMovies', data.Search)
    },
    async getCurrentMovie({ commit }, payload) {
      const { id } = payload

      const { data } = await axios.get(`/api/movie/${id}`)
      if (data) commit('setCurrentMovie', data)
    }
  }
}
