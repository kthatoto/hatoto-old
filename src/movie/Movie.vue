<template>
  <div>
    <div class="timer">{{ time.toFixed(1) }}</div>
    <Display :time="time"/>
  </div>
</template>
<script>
import Display from '@/movie/Display'
export default {
  components: { Display },
  data () {
    return {
      time: 0,
      timerId: 0
    }
  },
  created () {
    document.addEventListener('keyup', this.keyup)
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
        this.time += 0.01
      }, 10)
    },
    keyup (e) {
      const key = e.key
      switch (key) {
        case 's':
          this.startTimer()
          break
        case 'e':
          this.stopTimer()
          break
        default:
          break
      }
    }
  }
}
</script>
<style lang="scss">
.timer {
  position: absolute;
  top: 0;
  right: 0;
  background-color: black;
  opacity: 0.8;
  color: white;
  padding: 10px 20px;
}
</style>
