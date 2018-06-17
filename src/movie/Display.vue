<template>
  <div>
    <Introduction v-if="time <= 10"/>
  </div>
</template>
<script>
import Introduction from '@/movie/scenes/Introduction'
export default {
  components: { Introduction },
  props: ['time']
}
</script>
<style lang="scss">
</style>
