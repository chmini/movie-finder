<template>
  <h1>search movie with title</h1>
  <form @submit.prevent="onSubmit">
    <input ref="searchInput" type="search" :value="$route.query.title" />
  </form>
</template>

<script>
export default {
  methods: {
    onSubmit() {
      this.$router.push({
        path: '/search',
        query: {
          // TODO: 3글자 이상 처리 필요
          title: this.$refs.searchInput.value.trim()
        }
      })
    }
  }
}
</script>
