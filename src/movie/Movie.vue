<template>
  <div>
    <!-- <div class="timer">{{ time.toFixed(1) }}</div> -->
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
      timerId: 0,
      smallMode: false
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
    resetTimer () {
      this.time = 0
    },
    progressTime (value) {
      this.time += value
    },
    backTime (value) {
      this.time = Math.max(0, this.time - value)
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
        case 'r':
          this.resetTimer()
          break
        case 'm':
          this.smallMode = !this.smallMode
          break
        case 'ArrowLeft':
          if (this.smallMode) {
            this.backTime(0.1)
          } else {
            this.backTime(5)
          }
          break
        case 'ArrowRight':
          if (this.smallMode) {
            this.progressTime(0.1)
          } else {
            this.progressTime(5)
          }
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
  opacity: 0.5;
  color: white;
  padding: 10px 20px;
  z-index: 1;
}
</style>
