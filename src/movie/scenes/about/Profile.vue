<template>
  <div class="profile">
    <div v-show="status !== 'beforeStart'" class="animating">
      <h2 class="profile__header">
        <span v-for="(char, i) in 'Profile'.split('')"
          :key="i"
          class="profile__headerChar">{{ char }}</span>
      </h2>
      <span class="profile__headerUnderline"
        :style="{width: styles.underlineWidth}"></span>
      <div class="profile__content">
        <table class="profile__table">
          <tr v-for="row in profile" :key="row.header" class="profile__tableRow">
            <th class="profile__tableHeader">
              <span v-for="(char, i) in row.header"
                class="profile__tableChar"
                :key="i">{{ char }}</span>
              <span class="profile__tableChar">:</span>
            </th>
            <td>
              <span v-for="(char, i) in row.data"
                class="profile__tableChar"
                :key="i">{{ char }}</span>
            </td>
          </tr>
        </table>
        <img :src="require(`@/assets/${image}`)" class="profile__image">
      </div>
      <div class="profile__updated">
        <p><span v-for="(char, i) in `Updated on ${ lastUpdated }`.split('')"
          :key="i"
          class="profile__tableChar">{{ char }}</span></p>
      </div>
    </div>
  </div>
</template>
<script>
import anime from '@/movie/utils/Anime'
import watchTime from '@/movie/mixins/WatchTime'
import { animations as animes } from './animations'
export default {
  props: ['time'],
  mixins: [watchTime],
  data () {
    return {
      animation: {},
      duration: 0,
      profile: [
        { header: 'Name', data: '高橋 一斗 (Takahashi Kazuto)' },
        { header: 'Birth', data: '1996/02/20' },
        { header: 'Location', data: '神奈川, 東京' },
        { header: 'University / Grade', data: '明治大学 / 学部3年' },
        { header: 'Faculty / Department', data: '総合数理学部 / 現象数理学科' }
      ],
      image: 'profile.jpeg',
      lastUpdated: '2018/06/23',
      styles: {
        underlineWidth: '0%'
      }
    }
  },
  mounted () {
    this.animation = anime.timeline({
      autoplay: false
    }).add(animes.wave({targets: '.profile__headerChar'}))
      .add(animes.underline({targets: this.styles}))
      .add({
        targets: '.profile__tableChar',
        opacity: 1,
        delay: (_, i) => {
          return i * 10
        },
        duration: 300,
        offset: '-=800'
      }).add({
        targets: '.profile__tableChar',
        easing: 'gravity',
        translateX: 20,
        delay: (_, i) => {
          return i * 10
        },
        duration: 300,
        offset: '-=1500'
      }).add({
        targets: '.profile__image',
        rotate: 360,
        opacity: 1,
        duration: 1500,
        offset: '-=1000'
      })
    this.duration = this.animation.duration
    this.$parent.durations.profile = this.duration
  }
}
</script>
<style lang="scss" scoped>
$imageWidth: 200px;
.profile {
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
  &__table {
    &Header {
      text-align: right;
      padding: 5px 10px;
      position: relative;
    }
    &Char {
      display: inline-block;
    }
  }
  &__image {
    width: $imageWidth;
    position: absolute;
    top: 10px;
    right: 0;
    box-shadow: 0px 0px 5px 1px #999;
  }
  &__updated {
    margin-top: 25px;
    padding-right: calc( #{$imageWidth} + 20px );
    text-align: right;
    font-size: 0.8rem;
  }
}
.animating {
  .profile {
    &__table {
      &Char {
        opacity: 0;
      }
    }
    &__image {
      opacity: 0;
    }
  }
}
</style>
