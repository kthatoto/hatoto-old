<template>
  <div class="introduction">
    <Name :time="time" :offset="offset" />
  </div>
</template>
<script>
import Name from '@/movie/scenes/introduction/Name'

export default {
  components: { Name },
  props: ['time', 'offset', 'lifespan'],
  data () {
    return {}
  }
}
</script>
<style lang="scss" scoped>
.introduction {
}
</style>
