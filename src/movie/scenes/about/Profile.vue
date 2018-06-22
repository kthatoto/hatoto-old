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
      image: 'profile.jpeg'
    }
  }
}
</script>
<style lang="scss" scoped>
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
    width: 200px;
    position: absolute;
    top: 10px;
    right: 0;
    box-shadow: 0px 0px 5px 1px #999;
  }
}
</style>
