<template>
  <h2>Search Result</h2>
  <ul>
    <li v-for="movie in movies" :key="movie.imdbID">
      <RouterLink :to="{ name: 'movieDetail', params: { id: movie.imdbID } }">
        {{ movie.Title }}
      </RouterLink>
    </li>
  </ul>
</template>

<script>
export default {
  computed: {
    movies() {
      return this.$store.state.movie.movies
    },
    query() {
      return this.$route.query
    }
  },
  watch: {
    query() {
      this.$store.dispatch('movie/getMovies', this.query)
    }
  },
  created() {
    this.$store.dispatch('movie/getMovies', this.query)
  }
}
</script>
