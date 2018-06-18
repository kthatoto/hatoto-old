<template>
  <div>
    <h1 class="header1">Kazuto Takahashi</h1>
  </div>
</template>
<script>
import anime from 'animejs'
import { mapGetters } from 'vuex'

export default {
  props: ['time', 'offset', 'lifespan'],
  computed: mapGetters({
    width: 'getDisplayWidth',
    height: 'getDisplayHeight'
  }),
  data () {
    return {
      headerAnime: {}
    }
  },
  mounted () {
    this.headerAnime = anime.timeline({
      targets: '.header1',
      autoplay: false
    }).add({
      translateX: { value: -this.width / 2, duration: 1 * 1000 }
    }).add({
      translateX: { value: -this.width, delay: 2 * 1000, duration: 4 * 1000 }
    })
  },
  watch: {
    time (newTime, oldTime) {
      if (newTime <= this.offset + this.lifespan) {
        this.headerAnime.seek(newTime * 1000 - this.offset * 1000)
      }
    }
  }
}
</script>
<style lang="scss">
.header1 {
  position: absolute;
  top: 50%;
  left: 100%;
}
</style>
