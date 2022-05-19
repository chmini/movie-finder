<template>
  <header class="ly_header">
    <div class="ly_header_inner">
      <SearchBar />
    </div>
  </header>
  <main class="ly_cont">
    <div class="ly_cont_inner">
      <RouterView />
    </div>
  </main>
</template>

<script>
import SearchBar from '~/components/SearchBar'

export default {
  components: {
    SearchBar
  }
}
</script>

<style lang="scss">
.ly_header {
  position: fixed;
  z-index: 99;
  top: 0;
  width: 100%;
  background-color: $color-background;
  box-shadow: 0 0 8px 2px rgba($color-border, 0.5);
  &_inner {
    padding: 20px;
    max-width: 600px;
    margin: 0 auto;
  }
}

.ly_cont {
  margin-top: 92px;
  height: 100%;
  box-sizing: border-box;
  padding: 50px 0px;
  display: flex;
  justify-content: center;
  &_inner {
    max-width: 1024px;
    width: 100%;
    padding: 0px 30px;
  }
}
</style>
