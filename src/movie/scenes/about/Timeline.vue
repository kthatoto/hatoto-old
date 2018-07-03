<template>
  <div class="timeline">
    <div v-show="status !== 'beforeStart'" class="animating">
      <h2 class="timeline__header">
        <span v-for="(char, i) in 'Timeline'.split('')"
          :key="i"
          class="timeline__headerChar">{{ char }}</span>
      </h2>
      <span class="timeline__headerUnderline"
        :style="{width: styles.underlineWidth}"></span>
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
            :key="line.date"
            class="timeline__lineMask"
            :style="line.maskStyle">
            <div class="timeline__line"
              :style="line.style">{{ line.date }} {{ line.title }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import anime from '@/movie/utils/Anime'
import watchTime from '@/movie/mixins/WatchTime'
import linesData from './linesData'
import { animations as animes } from './animations'
export default {
  props: ['time'],
  mixins: [watchTime],
  data () {
    return {
      animation: {},
      duration: 0,
      yearLabels: [
        { year: 1996, position: '0% + 20px' },
        { year: 2015, position: '10%' },
        { year: 2016, position: '20%' },
        { year: 2017, position: '30%' },
        { year: 2018, position: '80%' }
      ],
      lines: [],
      styles: {
        underlineWidth: '0%'
      }
    }
  },
  created () {
    this.lines = linesData
  },
  mounted () {
    const width = document.getElementsByClassName('timeline')[0].clientWidth
    this.animation = anime.timeline({
      autoplay: false
    }).add(animes.wave({targets: '.timeline__headerChar'}))
      .add(animes.underline({targets: this.styles}))
      .add({
        targets: '.timeline__lineMask',
        width: width,
        duration: 2000,
        delay: (_, i) => {
          return i * 50
        }
      })
    this.duration = this.animation.duration
    this.$parent.durations.timeline = this.duration
  }
}
</script>
<style lang="scss" scoped>
.timeline {
  &__content {
    position: relative;
  }
  &__header {
    position: relative;
    &Underline {
      display: block;
      width: 100%;
      border-bottom: 1px solid black;
      margin-bottom: 20px;
    }
    &Char {
      display: inline-block;
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
    padding: 0 10px;
    font-size: 0.8rem;
  }
}
.animating {
  .timeline {
    &__line {
      &Mask {
        height: 25px;
        width: 0;
        overflow: hidden;
        position: relative;
      }
    }
  }
}
</style>
