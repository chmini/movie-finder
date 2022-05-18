<template>
  <SearchBar />
  <RouterView />
</template>

<script>
import SearchBar from '~/components/SearchBar'

export default {
  components: {
    SearchBar
  }
}
</script>
