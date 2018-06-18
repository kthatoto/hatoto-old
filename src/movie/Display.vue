<template>
  <div class="display">
    <div class="verticalLine"></div>
    <div class="holizotalLine"></div>
    <Introduction v-if="time <= 10" :time="time"/>
  </div>
</template>
<script>
import Introduction from '@/movie/scenes/Introduction'
import store from '@/vuex/store'
import { SET_DISPLAY_SIZE } from '@/vuex/mutation_types'

export default {
  components: { Introduction },
  props: ['time'],
  data () {
    return {
      width: null,
      height: null
    }
  },
  mounted () {
    const displaySize = {
      width: document.body.clientWidth,
      height: document.body.clientHeight
    }
    store.dispatch(SET_DISPLAY_SIZE, displaySize)
  }
}
</script>
<style lang="scss">
$borderWeight: 10px;
.display {
  width: 100vw;
  height: 100vh;
  min-width: 1000px;
  min-height: 600px;
  border: $borderWeight solid tan;
  position: relative;
}
.verticalLine {
  position: absolute;
  height: calc(100vh - 2 * #{$borderWeight});
  min-height: calc(600px - 2 * #{$borderWeight});
  width: 0;
  left: 50%;
  border-left: 1px solid black;
}
.holizotalLine {
  position: absolute;
  height: 0;
  width: calc(100vw - 2 * #{$borderWeight});
  min-width: calc(1000px - 2 * #{$borderWeight});
  top: 50%;
  border-top: 1px solid black;
}
</style>
