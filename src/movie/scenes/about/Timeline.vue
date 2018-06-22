<template>
  <div class="timeline">
    <h2 class="timeline__header">
      <span>Timeline</span>
      <span class="timeline__headerUnderline"></span>
    </h2>
    <div class="timeline__content">
      <div class="timeline__yearLabel">
        <span v-for="label in yearLabels"
          class="timeline__yearLabelItem"
          :key="label.year"
          :style="{ left: `calc( ${label.position} - 20px )` }">{{ label.year }}</span>
      </div>
      <div class="timeline__baseLine"></div>
      <div class="timeline__lines">
        <div v-for="line in lines"
          class="timeline__line"
          :style="line.style"
          :key="line.date">{{ line.date }} {{ line.title }}</div>
      </div>
    </div>
  </div>
</template>
<script>
import linesData from './linesData'
export default {
  data () {
    return {
      yearLabels: [
        { year: 1996, position: '0% + 20px' },
        { year: 2015, position: '10%' },
        { year: 2016, position: '20%' },
        { year: 2017, position: '30%' },
        { year: 2018, position: '80%' }
      ],
      lines: []
    }
  },
  created () {
    this.lines = linesData
  }
}
</script>
<style lang="scss" scoped>
.timeline {
  &__content {
    position: relative;
  }
  &__header {
    margin-bottom: 20px;
    &Underline {
      display: block;
      width: 100%;
      border-bottom: 1px solid black;
    }
  }
  &__yearLabel {
    position: relative;
    height: 20px;
    &Item {
      position: absolute;
      width: 40px;
      text-align: center;
      font-weight: bold;
    }
  }
  &__baseLine {
    border-bottom: 3px solid black;
  }
  &__lines {
    position: relative;
  }
  &__line {
    position: absolute;
    height: 25px;
    line-height: 25px;
    vertical-align: middle;
    padding: 0 5px;
  }
}
</style>
