<template>
  <div>
    <Console :stopTimer="stopTimer" :startTimer="startTimer" class="console"/>
    <Display :time="time"/>
  </div>
</template>
<script>
import Display from '@/movie/Display'
import Console from '@/movie/Console'
export default {
  components: { Display, Console },
  data () {
    return {
      time: 0,
      timerId: 0,
      smallMode: false
    }
  },
  created () {
    document.addEventListener('keyup', this.keyup)
  },
  mounted () {
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
        this.time += 10
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
            this.backTime(100)
          } else {
            this.backTime(5000)
          }
          break
        case 'ArrowRight':
          if (this.smallMode) {
            this.progressTime(100)
          } else {
            this.progressTime(5000)
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
.timer, .console {
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
