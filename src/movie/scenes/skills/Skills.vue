<template>
  <div class="skills">
    <List :time="time"/>
  </div>
</template>
<script>
import List from '@/movie/scenes/skills/List'
import watchDurations from '@/movie/mixins/WatchDurations'

export default {
  components: { List },
  props: ['time'],
  mixins: [watchDurations],
  data () {
    return {
      duration: 0,
      durations: {
        list: 0
      }
    }
  },
  watch: {
    duration (newDureation) {
      this.$parent.durations.skills = newDureation
    }
  }
}
</script>
