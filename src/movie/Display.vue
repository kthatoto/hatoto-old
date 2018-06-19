<template>
  <div class="display">
    <Introduction v-if="1 < time" :time="time" :offset="1"/>
    <div class="content">
      <About v-if="page === 'about'"/>
      <Works v-if="page === 'works'"/>
      <Skills v-if="page === 'skills'"/>
      <Contact v-if="page === 'contact'"/>
    </div>
  </div>
</template>
<script>
import Introduction from '@/movie/scenes/introduction/Introduction'
import store from '@/vuex/store'
import { SET_DISPLAY_SIZE } from '@/vuex/mutation_types'

import About from '@/movie/pages/About'
import Works from '@/movie/pages/Works'
import Skills from '@/movie/pages/Skills'
import Contact from '@/movie/pages/Contact'

export default {
  components: { Introduction, About, Works, Skills, Contact },
  props: ['time'],
  data () {
    return {
      width: null,
      height: null,
      page: ''
    }
  },
  mounted () {
    const displaySize = {
      width: Math.max(document.body.clientWidth, 1000),
      height: Math.max(document.body.clientHeight, 600)
    }
    store.dispatch(SET_DISPLAY_SIZE, displaySize)
  }
}
</script>
<style lang="scss">
$borderWeight: 0px;
.display {
  width: 100vw;
  height: 100vh;
  min-width: 1000px;
  min-height: 600px;
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
.content {
  border: 1px solid red;
  position: relative;
  top: 150px;
  left: 300px;
  width: calc(100% - 300px - 50px);
  height: calc(100% - 150px - 50px);

}
</style>
