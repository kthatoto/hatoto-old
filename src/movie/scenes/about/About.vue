<template>
  <div class="about">
    <Profile :time="time" :offset="offset"/>
  </div>
</template>
<script>
import Profile from '@/movie/scenes/about/Profile'

export default {
  components: { Profile },
  props: ['time', 'offset']
}
</script>
<style lang="scss" scoped>
</style>
