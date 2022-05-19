<template>
  <form @submit.prevent="onSubmit">
    <input ref="searchInput" class="el_searchBar" type="text" :value="$route.query.title" placeholder="Search movie" />
  </form>
</template>

<script>
export default {
  methods: {
    onSubmit() {
      this.$router.push({
        path: '/search',
        query: {
          title: this.$refs.searchInput.value.trim()
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.el_searchBar {
  width: 100%;
  box-sizing: border-box;
  height: 52px;
  padding: 0 40px;
  font-size: 1.2rem;
  border: 2px solid rgba($color-border, 0.8);
  border-radius: 13px;
  outline: none;
  color: $color-font;
}
</style>
