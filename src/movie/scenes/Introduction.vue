<template>
  <div>
    <h1 v-if="time < 5" class="header1">kthatoto</h1>
  </div>
</template>
<script>
import anime from 'animejs'
export default {
  props: ['time'],
  data () {
    return {
      headerAnime: {},
      width: 0
    }
  },
  created () {
    this.width = document.body.clientWidth
  },
  mounted () {
    this.headerAnime = anime({
      targets: '.header1',
      translateX: [
        { value: -this.width / 2, duration: 1 * 1000 },
        { value: -this.width / 2, duration: 3 * 1000 },
        { value: -this.width, duration: 1 * 1000 }
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
h1 {
  position: absolute;
  top: 50%;
  left: 100%;
}
</style>
