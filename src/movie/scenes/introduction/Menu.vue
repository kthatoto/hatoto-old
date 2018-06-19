<template>
  <div class="menu">
    <ul class="menu__list">
      <li class="menu__item">About</li>
      <li class="menu__item">Works</li>
      <li class="menu__item">Skills</li>
      <li class="menu__item">Contact</li>
    </ul>
  </div>
</template>
<script>
import anime from '@/movie/utils/Anime'
import { mapGetters } from 'vuex'
import { menuAnimations as animes } from './animations'

export default {
  props: ['time', 'offset'],
  computed: mapGetters({
    width: 'getDisplayWidth',
    height: 'getDisplayHeight'
  }),
  data () {
    return {
      animation: {},
      duration: 0,
      alive: true
    }
  },
  mounted () {
    this.animation = anime.timeline({
      autoplay: false
    }).add(animes.slidedown())
    this.duration = this.animation.duration
  },
  watch: {
    time (newTime, _) {
      if (this.offset <= this.time && this.time <= this.offset + (this.duration / 1000)) {
        this.alive = true
      } else {
        this.alive = false
      }
      if (this.alive) {
        this.animation.seek(newTime * 1000 - this.offset * 1000)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.menu {
  position: absolute;
  top: 100px;
  left: 50px;
  &__list {
    max-height: 0;
    overflow: hidden;
  }
}
</style>
