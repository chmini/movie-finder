<template>
  <div>{{ currentMovie }}</div>
</template>

<script>
export default {
  computed: {
    currentMovie() {
      return this.$store.state.movie.currentMovie
    }
  },
  created() {
    this.$store.dispatch('movie/getMovie', this.$route.params)
  }
}
</script>
