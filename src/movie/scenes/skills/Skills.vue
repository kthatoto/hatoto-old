<template>
  <div class="skills">
    <List :time="time"/>
  </div>
</template>
<script>
export default {
  compoents: {},
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
