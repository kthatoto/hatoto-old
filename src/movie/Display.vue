<template>
  <div class="display">
    <div class="verticalLine"></div>
    <div class="holizotalLine"></div>
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
  border: 10px solid black;
}
.verticalLine {
  position: absolute;
  height: 100%;
  width: 0;
  left: 50%;
  border-left: 1px solid black;
}
.holizotalLine {
  position: absolute;
  height: 0;
  width: 100%;
  top: 50%;
  border-top: 1px solid black;
}
</style>
