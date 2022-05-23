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
    query() {
      return this.$route.query
    }
  },
  watch: {
    query() {
      if (this.$route.fullPath === '/') return
      this.$store.dispatch('movie/getMovies', { ...this.query })
    }
  },
  created() {
    if (Object.keys(this.query).length === 0) return
    this.$store.dispatch('movie/getMovies', { ...this.query })
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
