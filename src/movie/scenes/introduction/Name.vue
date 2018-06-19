<template>
  <div class="name">
    <div class="name__chars">
      <span v-for="(char, i) in chars"
        class="name__char"
        :class="{'-leave': !char.remain, '-remain': char.remain }"
        :key="i">{{ char.body }}</span>
      <span v-for="char in '.to'.split('')"
        v-show="cloneShowing"
        :key="char"
        class="name__char -cloned">{{ char }}</span>
    </div>
  </div>
</template>
<script>
import anime from '@/movie/utils/Anime'
import { mapGetters } from 'vuex'
import { nameAnimations as animes } from './animations'

export default {
  props: ['time', 'offset'],
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
      ],
      cloneShowing: false
    }
  },
  mounted () {
    this.animation = anime.timeline({
      autoplay: false
    }).add(animes.fadein(this.width))
      .add(animes.wave())
      .add(animes.wave({ offset: '+=10000' }))
      .add(animes.disappear())
      .add(animes.rotateScale())
      .add(animes.appearClone({ begin: () => { this.cloneShowing = true } }))
      .add({ complete: () => { this.alive = false } })
  },
  watch: {
    time (newTime, _) {
      if (this.alive) {
        this.animation.seek(newTime * 1000 - this.offset * 1000)
      } else {
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
    &.-cloned {
      font-size: 0px;
    }
  }
}
</style>
