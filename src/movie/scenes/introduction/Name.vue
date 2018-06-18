<template>
  <div class="name">
    <div class="name__chars">
      <span v-for="(char, i) in chars"
        class="name__char"
        :class="{'-leave': !char.remain, '-remain': char.remain }"
        :key="i">{{ char.body }}</span>
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
      alive: true,
      chars: [
        { body: 'T' }, { body: 'a' }, { body: 'k' }, { body: 'a' },
        { body: 'h', remain: true }, { body: 'a', remain: true },
        { body: 's' }, { body: 'h' }, { body: 'i' }, { body: ' ' },
        { body: 'K' }, { body: 'a' }, { body: 'z' }, { body: 'u' },
        { body: 't', remain: true }, { body: 'o', remain: true }
      ]
    }
  },
  mounted () {
    const fadein = () => {
      return {
        targets: '.name',
        translateX: { value: -this.width / 2 - 200, duration: 1 * 1000 }
      }
    }
    const wave = (option) => {
      return Object.assign({
        targets: '.name__char',
        easing: 'gravity',
        translateY: -50,
        delay: (_, i) => {
          return i * 20
        },
        duration: 200
      }, option)
    }
    const disappear = () => {
      return {
        offset: '-=350',
        targets: '.name__char.-leave',
        opacity: 0,
        duration: 300,
        delay: (_, i) => {
          return i * 20
        }
      }
    }
    const rotateScale = () => {
      return {
        targets: '.name__char.-remain',
        scale: 2,
        rotate: 360,
      }
    }

    this.animation = anime.timeline({
      autoplay: false
    }).add(fadein())
      .add(wave())
      .add(wave({ offset: '+=10000' }))
      .add(disappear())
      .add(rotateScale())
  },
  watch: {
    time (newTime, _) {
      this.animation.seek(newTime * 1000 - this.offset * 1000)
      // if (this.alive && newTime <= this.offset + this.lifespan) {
      //   this.animation.seek(newTime * 1000 - this.offset * 1000)
      // } else {
      //   this.alive = false
      //   this.animation = null
      // }
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
