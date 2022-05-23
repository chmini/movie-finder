<template>
  <div v-if="poster === 'N/A'" class="el_imgNone">No Image</div>
  <img v-else :src="poster" :alt="`${title} poster`" class="el_imgPoster" />
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    poster: {
      type: String,
      default: 'N/A'
    }
  }
}
</script>

<style lang="scss" scoped>
.el_imgNone {
  width: 100%;
  height: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 13px;
  background-color: #999;
  color: #666;
  font-size: 30px;
  font-weight: 700;
}

.el_imgPoster {
  width: 100%;
  border-radius: 13px;
}
</style>
