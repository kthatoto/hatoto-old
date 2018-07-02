<template>
  <div class="introduction">
    <Name :time="time"/>
    <Menu :time="time - this.durations.name"/>
  </div>
</template>
<script>
import Name from '@/movie/scenes/introduction/Name'
import Menu from '@/movie/scenes/introduction/Menu'
import watchDurations from '@/movie/mixins/WatchDurations'

export default {
  components: { Name, Menu },
  props: ['time'],
  mixins: [watchDurations],
  data () {
    return {
      duration: 0,
      durations: {
        name: 0,
        menu: 0
      }
    }
  },
  watch: {
    duration (newDuration) {
      this.$parent.durations.introduction = newDuration
    }
  }
}
</script>
