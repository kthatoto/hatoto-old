export default {
  watch: {
    time (newTime, _) {
      if (this.time < 0) {
        this.status = 'beforeStart'
      } else if (this.time > this.duration) {
        this.status = 'finished'
      } else {
        this.status = 'animating'
        this.animation.seek(newTime)
      }
    }
  }
}
