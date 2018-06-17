<template>
  <div>
    <h1>This is Introduction component</h1>
  </div>
</template>
<script>
import anime from 'animejs'
export default {
  props: ['time'],
  mounted () {
    anime({
      targets: 'h1',
      translateX: [
        { value: 500, duration: 5 * 1000 },
        { value: 0, duration: 5 * 1000 }
      ],
      duration: 10 * 1000,
      loop: true,
      easing: 'linear'
    })
  },
  methods: {
  }
}
</script>
<style lang="scss">
h1 {
  position: absolute;
  top: 300px;
}
</style>
