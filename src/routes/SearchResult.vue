<template>
  <ul ref="movieList">
    <SearchResultItem v-for="movie in movies" :key="movie.imdbID" :movie="movie" />
  </ul>
</template>

<script>
import SearchResultItem from '~/components/SearchResultItem'

import { mapState } from 'vuex'

export default {
  components: {
    SearchResultItem
  },
  computed: {
    ...mapState('movie', ['movies']),
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

<style lang="scss" scoped>
ul {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px 30px;
}
</style>
