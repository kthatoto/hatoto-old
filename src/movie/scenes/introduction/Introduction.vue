<template>
  <div class="introduction">
    <Name :time="time" :offset="offset" />

  </div>
</template>
<script>
import Name from '@/movie/scenes/introduction/Name'
import Menu from '@/movie/scenes/introduction/Menu'

export default {
  components: { Name, Menu },
  props: ['time', 'offset'],
  data () {
    return {}
  }
}
</script>
<style lang="scss" scoped>
.introduction {
}
</style>
