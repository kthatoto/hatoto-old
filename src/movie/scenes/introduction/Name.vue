<template>
  <div>
    <div class="name" v-show="status === 'animating'">
      <div class="name__chars">
        <span v-for="dummy in [100, 101, 102]" :key="dummy" class="name__char -dummy"></span>
        <span v-for="(char, i) in chars"
          class="name__char"
          :class="{'-leave': !char.remain, '-remain': char.remain }"
          :key="i">{{ char.body }}</span>
        <span v-for="char in ['.', 't', 'o']"
          :key="char"
          class="name__char -cloned">{{ char }}</span>
      </div>
    </div>
    <div v-show="status === 'finished'">
      <h1 class="name__complete">hato.to</h1>
    </div>
  </div>
</template>
<script>
import anime from '@/movie/utils/Anime'
import watchTime from '@/movie/mixins/WatchTime'
import { mapGetters } from 'vuex'
import { nameAnimations as animes } from './animations'

export default {
  props: ['time'],
  mixins: [watchTime],
  computed: mapGetters({
    width: 'getDisplayWidth',
    height: 'getDisplayHeight'
  }),
  data () {
    return {
      animation: {},
      duration: 0,
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
    this.animation = anime.timeline({
      autoplay: false
    }).add(animes.fadein(this.width))
      .add(animes.wave())
      .add(animes.wave())
      .add(animes.disappear())
      .add(animes.rotateScale())
      .add(animes.deleteDisappeared())
      .add(animes.appearClone())
      .add(animes.moveLogoPosition(this.width, this.height, 50, 50))
      .add(animes.changeWidth())
    this.duration = this.animation.duration
    this.$parent.durations.name = this.duration
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
    width: 500px;
    position: relative;
    display: inline-flex;
    justify-content: center;
  }
  &__char {
    display: block;
    float: left;
    min-width: 15px;
    max-width: 50px;
    &.-cloned {
      font-size: 0;
    }
    &.-dummy {
      font-size: 0;
    }
  }
  &__complete {
    font-size: 60px;
    position: absolute;
    top: 50px;
    left: 50px;
    line-height: 50px;
  }
}
</style>
