<template>
  <div class="about">
    <Profile :time="time" class="about__profile"/>
    <Timeline :time="time - durations.profile"/>
  </div>
</template>
<script>
import Profile from '@/movie/scenes/about/Profile'
import Timeline from '@/movie/scenes/about/Timeline'
import watchDurations from '@/movie/mixins/WatchDurations'

export default {
  components: { Profile, Timeline },
  props: ['time'],
  mixins: [watchDurations],
  data () {
    return {
      duration: 0,
      durations: {
        profile: 0,
        timeline: 0
      }
    }
  },
  watch: {
    duration (newDuration) {
      this.$parent.durations.about = newDuration
    }
  }
}
</script>
<style lang="scss" scoped>
.about {
  position: relative;
  top: 150px;
  left: 300px;
  width: calc(100% - 300px - 50px);
  height: calc(100% - 150px - 50px);
}
</style>
