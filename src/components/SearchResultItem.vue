<template>
  <RouterLink :to="{ name: 'movieDetail', params: { id: movie.imdbID } }">
    <li ref="card" :key="movie.imdbID" class="bl_card">
      <div class="bl_card_header">
        <div v-if="movie.Poster === 'N/A'" class="el_imgNone">No Image</div>
        <img v-else :src="movie.Poster" :alt="`${movie.Title} poster`" />
      </div>
      <div class="bl_card_cont">
        <div>{{ movie.Year }} | {{ movie.Type }}</div>
        <div :title="movie.Title">{{ movie.Title }}</div>
      </div>
    </li>
  </RouterLink>
</template>

<script>
export default {
  props: {
    movie: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>

<style lang="scss" scoped>
.bl_card {
  padding: 10px;
  box-sizing: border-box;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 15px;
  font-size: 1.2rem;
  border-radius: 13px;
  box-shadow: 1px 2px 10px rgba(0, 0, 0, 0.5);
  transition: all 0.2s;

  &_header {
    overflow: hidden;
    img {
      width: 100%;
      border-radius: 13px;
    }
  }

  &_cont {
    div {
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      line-height: 1.5;
      margin: 0 5px;
      &:last-child {
        font-weight: 700;
      }
    }
  }

  &:hover {
    transform: scale(1.05);
  }
}

.el_imgNone {
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
</style>
