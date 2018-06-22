<template>
  <div class="works">
  </div>
</template>
<script>
export default {
  props: ['time', 'offset']
}
</script>
<style lang="scss" scoped>
.works {
  position: relative;
  top: 150px;
  left: 300px;
  width: calc(100% - 300px - 50px);
  height: calc(100% - 150px - 50px);
}
</style>
