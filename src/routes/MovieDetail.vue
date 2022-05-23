<template>
  <div :key="$route.params.id" class="bl_media">
    <div ref="mediaImg" class="bl_media_img">
      <img :src="poster" :alt="currentMovie.Title" />
    </div>
    <div class="bl_media_cont">
      <div class="bl_media_title">{{ currentMovie.Title }}</div>
      <div class="bl_info">
        <span class="bl_info_title">Genre </span>
        <span>{{ currentMovie.Genre }}</span>
      </div>
      <div class="bl_info">
        <span class="bl_info_title">Runtime </span>
        <span>{{ currentMovie.Runtime }}</span>
      </div>
      <div class="bl_info">
        <span class="bl_info_title">Released </span>
        <span>{{ currentMovie.Released }}</span>
      </div>
      <div class="bl_info">
        <span class="bl_info_title">Director </span>
        <span>{{ currentMovie.Director }}</span>
      </div>
      <div class="bl_info">
        <span class="bl_info_title">Actors </span>
        <span>{{ currentMovie.Actors }}</span>
      </div>
      <div class="bl_info">
        <p>{{ currentMovie.Plot }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState('movie', ['currentMovie']),
    poster() {
      return this.currentMovie.Poster?.replace('SX300', 'SX500')
    }
  },
  watch: {
    $route() {
      if (this.$route.path.indexOf('/movie') !== 0) {
        this.$store.commit('movie/setCurrentMovie', {})
        return
      }
      this.$store.dispatch('movie/getCurrentMovie', { ...this.$route.params })
    }
  },
  created() {
    this.$store.dispatch('movie/getCurrentMovie', { ...this.$route.params })
  }
}
</script>

<style lang="scss" scoped>
.bl_media {
  height: 100%;
  display: flex;
  gap: 50px;
  font-size: 24px;

  &_img {
    img {
      max-width: 500px;
      width: 45vw;
      border-radius: 13px;
    }
  }

  &_title {
    margin-bottom: 30px;
    font-size: 50px;
    font-weight: 700;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    &_img {
      img {
        max-width: 100%;
        width: 100%;
      }
    }
  }
}

.bl_info {
  margin-bottom: 20px;

  &_title {
    font-weight: 700;
  }

  p {
    line-height: 1.2;
  }
}
</style>
