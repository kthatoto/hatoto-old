<template>
  <div>
    <router-link to="/">Go to root</router-link>
    <h1>polling</h1>
    <p>{{ time.toFixed(1) }}</p>
    <div @click="stopTimer">stop</div>
    <div @click="startTimer">start</div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      time: 0,
      timerId: 0
    }
  },
  created () {
    this.startTimer()
  },
  beforeDestroy () {
    this.stopTimer()
  },
  methods: {
    stopTimer () {
      clearInterval(this.timerId)
    },
    startTimer () {
      this.stopTimer()
      this.timerId = setInterval(() => {
        this.time += 1
      }, 1000)
    }
  }
}
</script>
<style lang="scss">
</style>
