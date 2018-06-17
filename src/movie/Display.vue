<template>
  <div class="display">
    <Introduction v-if="time <= 10" :time="time"/>
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
.display {
  width: 100vw;
  height: 100vh;
  min-width: 1000px;
  min-height: 600px;
}
</style>
