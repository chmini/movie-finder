<template>
  <ul>
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
  },
  watch: {
    $route() {
      this.$store.dispatch('movie/getMovies', { ...this.$route.query })
    }
  },
  created() {
    this.$store.dispatch('movie/getMovies', { ...this.$route.query })
  }
}
</script>

<style lang="scss" scoped>
ul {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 40px 30px;
}
</style>
