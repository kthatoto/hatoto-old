<template>
  <div class="introduction">
    <Name :time="time"/>
    <Menu :time="time"/>
  </div>
</template>
<script>
import Name from '@/movie/scenes/introduction/Name'
import Menu from '@/movie/scenes/introduction/Menu'

export default {
  components: { Name, Menu },
  props: ['time'],
  data () {
    return {
      duration: 0
    }
  }
}
</script>
