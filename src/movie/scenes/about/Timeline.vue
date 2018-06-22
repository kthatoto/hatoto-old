<template>
  <div class="timeline">
    <h2 class="timeline__header">
      <span>Timeline</span>
      <span class="timeline__headerUnderline"></span>
    </h2>
  </div>
</template>
<script>
export default {
}
</script>
<style lang="scss" scoped>
.timeline {
  &__content {
    position: relative;
  }
  &__header {
    margin-bottom: 10px;
    &Underline {
      display: block;
      width: 100%;
      border-bottom: 1px solid black;
    }
  }
}
</style>
