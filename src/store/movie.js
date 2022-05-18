import axios from 'axios'

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

      const data = await axios.get(`api/movie?search=${title}`)
      console.log(data)

      // commit('setMovies', data.Search)
    },
    async getMovie({ commit }, payload) {
      const { id } = payload

      const { data } = await axios.get(`api/movie/${id}`)
      commit('setCurrentMovie', data)
    }
  }
}
