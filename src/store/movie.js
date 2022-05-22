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
    async getMovies({ commit }, options) {
      const { data } = await axios.get('/api/movie', { ...options })
      commit('setMovies', data.Search)
    },
    async getCurrentMovie({ commit }, options) {
      const { data } = await axios.get('/api/movie', { ...options })
      commit('setCurrentMovie', data)
    }
  }
}
