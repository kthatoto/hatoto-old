<template>
  <div>
    <div @click="stopTimer">stop</div>
    <div @click="startTimer">start </div>
  </div>
</template>
<script>
export default {
  props: ['stopTimer', 'startTimer']
}
</script>
<style lang="scss" scoped>
</style>
