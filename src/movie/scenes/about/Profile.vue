<template>
  <div class="profile">
    <h2 class="profile__header">
      <span>Profile</span>
      <span class="profile__headerUnderline"></span>
    </h2>
    <div class="profile__content">
      <table class="profile__table">
        <tr v-for="row in profile" :key="row.header" class="profile__tableRow">
          <th class="profile__tableHeader">{{ row.header }}:</th>
          <td>{{ row.data }}</td>
        </tr>
      </table>
      <img :src="require(`@/assets/${image}`)" class="profile__image">
    </div>
    <div class="profile__updated">
      <p>Updated on {{ lastUpdated }}</p>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      profile: [
        { header: 'Name', data: '高橋 一斗 (Takahashi Kazuto)' },
        { header: 'Birth', data: '1996/02/20' },
        { header: 'Location', data: '神奈川, 東京' },
        { header: 'University / Grade', data: '明治大学 / 学部3年' },
        { header: 'Faculty / Department', data: '総合数理学部 / 現象数理学科' }
      ],
      image: 'profile.jpeg',
      lastUpdated: '2018/06/23'
    }
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
    margin-bottom: 10px;
    &Underline {
      display: block;
      width: 100%;
      border-bottom: 1px solid black;
    }
  }
  &__table {
    &Header {
      text-align: right;
      padding: 5px 10px;
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
</style>
