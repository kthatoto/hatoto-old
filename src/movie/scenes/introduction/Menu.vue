<template>
  <div class="menu">
    <ul class="menu__list" v-show="status === 'animating'">
      <li v-for="item in items"
        class="menu__item"
        :key="item.label">
        <div class="menu__label">
          <span>{{ item.label }}</span>
        </div>
        <div class="menu__label -hover">
          <span>{{ item.label }}</span>
        </div>
        <div class="menu__border"></div>
      </li>
    </ul>

    <ul class="menu__list -finished" v-show="status === 'finished'">
      <li v-for="item in items"
        class="menu__item -finished"
        :key="item.label">
        <div class="menu__label -finished">
          <span>{{ item.label }}</span>
        </div>
        <div class="menu__label -hover -finished">
          <span>{{ item.label }}</span>
        </div>
        <div class="menu__border -finished"></div>
      </li>
    </ul>
  </div>
</template>
<script>
import anime from '@/movie/utils/Anime'
import { mapGetters } from 'vuex'
import { menuAnimations as animes } from './animations'

export default {
  props: ['time', 'offset'],
  computed: mapGetters({
    width: 'getDisplayWidth',
    height: 'getDisplayHeight'
  }),
  data () {
    return {
      animation: {},
      duration: 0,
      items: [
        { label: 'About' },
        { label: 'Works' },
        { label: 'Skills' },
        { label: 'Contact' }
      ],
      status: 'beforeStart'
    }
  },
  mounted () {
    this.animation = anime.timeline({
      autoplay: false
    }).add(animes.slidedown())
      .add(animes.border())
    this.duration = this.animation.duration
  },
  watch: {
    time (newTime, _) {
      if (this.time < this.offset) {
        this.status = 'beforeStart'
      } else if (this.time > this.offset + (this.duration / 1000)) {
        this.status = 'finished'
      } else {
        this.status = 'animating'
        this.animation.seek(newTime * 1000 - this.offset * 1000)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.menu {
  position: absolute;
  top: 100px;
  left: 50px;
  &__list {
    max-height: 0;
    overflow: hidden;
    width: 70px;
    &.-finished {
      max-height: 300px;
    }
  }
  &__item {
    margin: 10px 0 20px;
    cursor: pointer;
    position: relative;
    &:hover {
      .-hover {
        height: 30px;
      }
    }
  }
  &__label {
    display: inline-block;
    position: absolute;
    top: 0;
    padding: 0 5px;
    width: 70px;
    height: 30px;
    line-height: 30px;
    vertical-align: middle;
    &.-hover {
      background-color: black;
      color: white;
      overflow: hidden;
      height: 0;
      transition: all 0.3s ease;
    }
  }
  &__border {
    border-bottom: 1px solid black;
    width: 0;
    height: 0;
    padding-top: 30px;
    &.-finished {
      width: 70px;
    }
  }
}
</style>
