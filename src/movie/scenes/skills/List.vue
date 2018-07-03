<template>
  <div class="list">
    <div v-show="status !== 'beforeStart'" class="animating">
    </div>
  </div>
</template>
<script>
import anime from '@/movie/utils/Anime'
import watchTime from '@/movie/mixins/WatchTime'
export default {
  props: ['time'],
  mixins: [watchTime],
  data () {
    return {
      animation: {},
      duration: 0
    }
  },
  mounted () {
    this.animation = anime.timeline({
      autoplay: false
    }).add({
      duration: 5000
    })
    this.duration = this.animation.duration
    this.$parent.durations.list = this.duration
  }
}
</script>
