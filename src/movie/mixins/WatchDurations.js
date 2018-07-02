export default {
  watch: {
    durations: {
      handler (durations) {
        this.duration = 0
        Object.keys(durations).forEach(key => {
          this.duration += durations[key]
        })
      },
      deep: true
    }
  }
}
