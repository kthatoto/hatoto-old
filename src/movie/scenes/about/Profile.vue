<template>
  <div class="profile">
    <h2 class="profile__header">
      <span>Profile</span>
      <span class="profile__headerUnderline"></span>
    </h2>
    <table class="profile__table">
      <tr v-for="row in profile" :key="row.header" class="profile__tableRow">
        <th class="profile__tableHeader">{{ row.header }}:</th>
        <td>{{ row.data }}</td>
      </tr>
    </table>
  </div>
</template>
<script>
export default {
  data () {
    return {
      profile: [
        { header: 'Name', data: '高橋 一斗' },
        { header: 'Birth', data: '1996/02/20' },
        { header: 'Location', data: '神奈川, 東京' },
        { header: 'University/Grade', data: '明治大学/学部3年' }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.profile {
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
      padding: 5px 0;
      padding-right: 15px;
    }
  }
}
</style>
