<template>
  <div>
    <h1 class="header1">Kazuto Takahashi</h1>
  </div>
</template>
<script>
import anime from 'animejs'
import { mapGetters } from 'vuex'
export default {
  props: ['time'],
  computed: mapGetters({
    width: 'getDisplayWidth',
    height: 'getDisplayHeight'
  }),
  data () {
    return {
      headerAnime: {}
    }
  },
  created () {
  },
  mounted () {
    const width = this.width
    console.log(this.width)
    this.headerAnime = anime({
      targets: '.header1',
      translateX: [
        { value: -width / 2, duration: 1 * 1000 },
        { value: -width / 2, duration: 3 * 1000 },
        { value: -width, duration: 1 * 1000 }
      ],
      duration: 5 * 1000,
      easing: 'linear',
      autoplay: false
    })
  },
  methods: {
  },
  watch: {
    time (newTime, oldTime) {
      this.headerAnime.seek(newTime * 1000)
    }
  }
}
</script>
<style lang="scss">
.header1 {
  position: absolute;
  top: 50%;
  left: 100%;
  word-break: nowrap;
}
</style>
