<template>
  <div class="about">
    <Profile :time="time" :offset="offset" class="about__profile"/>
    <Timeline :time="time" :offset="offset"/>
  </div>
</template>
<script>
import Profile from '@/movie/scenes/about/Profile'
import Timeline from '@/movie/scenes/about/Timeline'

export default {
  components: { Profile, Timeline },
  props: ['time', 'offset']
}
</script>
<style lang="scss" scoped>
.about {
  position: relative;
  top: 150px;
  left: 300px;
  width: calc(100% - 300px - 50px);
  height: calc(100% - 150px - 50px);
  &__profile {
    margin-bottom: 60px;
  }
}
</style>
