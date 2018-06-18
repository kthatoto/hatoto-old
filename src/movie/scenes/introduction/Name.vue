<template>
  <div class="name">
    <div class="name__chars">
      <span v-for="(char, i) in 'Takahashi Kazuto'.split('')"
        class="name__char"
        :key="i">{{ char }}</span>
    </div>
  </div>
</template>
<script>
import anime from '@/movie/utils/Anime'
import { mapGetters } from 'vuex'
export default {
  props: ['time', 'offset', 'lifespan'],
  computed: mapGetters({
    width: 'getDisplayWidth',
    height: 'getDisplayHeight'
  }),
  data () {
    return {
      animation: {},
      alive: true
    }
  },
  mounted () {
    this.animation = anime.timeline({
      autoplay: false
    }).add({
      targets: '.header1',
      translateX: { value: -this.width / 2 - 200, duration: 1 * 1000 }
    }).add({
      targets: '.header1__char',
      easing: 'gravity',
      translateY: -50,
      delay: (_, i) => {
        return i * 20
      },
      duration: 200
    })
  },
  watch: {
    time (newTime, _) {
      if (this.alive && newTime <= this.offset + this.lifespan) {
        this.animation.seek(newTime * 1000 - this.offset * 1000)
      } else {
        this.alive = false
        this.animation = null
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.name {
  font-size: 40px;
  font-weight: bold;
  line-height: 50px;
  vertical-align: middle;
  position: absolute;
  top: calc(50% - 25px);
  left: 100%;
  white-space: nowrap;
  &__chars {
    width: 400px;
    position: relative;
    display: inline-flex;
    justify-content: center;
  }
  &__char {
    display: block;
    float: left;
    min-width: 15px;
  }
}
</style>
