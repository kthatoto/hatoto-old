<template>
  <div class="works">
    <h2 class="works__header">Works</h2>
    <div>
      <div class="works__item">
        <h3 class="works__title">てのひら文具店</h3>
        <div class="works__images">
          <img :src="require('@/assets/bungu.png')" class="works__image">
        </div>
        <div class="clear"></div>
        <p class="works__description">文具ECサービス。引き継ぎでサーバーサイド、フロントエンド、インフラ、課金処理等全て開発しました。(モバイルアプリ以外)</p>
        <div class="works__skills">
          <h4 class="works__skillsHeader">使用技術</h4>
          <table class="works__table">
            <tr>
              <th>サーバーサイド</th>
              <td>Ruby on Rails</td>
            </tr>
            <tr>
              <th>フロントエンド</th>
              <td>Vue.js</td>
            </tr>
            <tr>
              <th>インフラ</th>
              <td>AWS (EC2, RDS, S3)</td>
            </tr>
            <tr>
              <th>その他</th>
              <td>Stripe, Payjp, Ansible, CodeDeploy</td>
            </tr>
          </table>
        </div>
      </div>

      <div class="works__item">
        <h3 class="works__title">Union</h3>
        <div class="works__images">
          <img :src="require('@/assets/union1.png')" class="works__image -twins">
          <img :src="require('@/assets/union2.png')" class="works__image -twins">
        </div>
        <div class="clear"></div>
        <p class="works__description">同じ大学の知人と開発した大学生専用SNS。開発は2人で行い、サーバーサイド、フロントエンド、インフラを担いました。</p>
        <div class="works__skills">
          <h4 class="works__skillsHeader">使用技術</h4>
          <table class="works__table">
            <tr>
              <th>サーバーサイド</th>
              <td>Ruby on Rails</td>
            </tr>
            <tr>
              <th>フロントエンド</th>
              <td>特になし</td>
            </tr>
            <tr>
              <th>インフラ</th>
              <td>Heroku</td>
            </tr>
            <tr>
              <th>その他</th>
              <td>特になし</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
}
</script>
<style lang="scss" scoped>
.works {
  &__header {
    margin-bottom: 30px;
  }
  &__item {
    float: left;
    width: 45%;
    &:nth-child(odd) {
      margin-right: 5%;
    }
  }
  &__title {
    margin-bottom: 10px;
  }
  &__images {
  }
  &__image {
    width: 100%;
    box-shadow: 0px 1px 4px 1px #aaa;
    &.-twins {
      width: 48%;
      float: left;
      &:nth-child(odd) {
        margin-right: 2%;
      }
    }
  }
  &__description {
    font-size: 0.8rem;
  }
  &__skills {
    &Header {
      display: inline-block;
      border: 1px solid black;
      padding: 5px 10px;
      border-radius: 3px;
      font-size: 0.9rem;
    }
  }
  &__table {
    th {
      width: 130px;
      padding-right: 10px;
      text-align: right;
    }
    td {
      font-size: 0.8rem;
    }
  }
}
.clear {
  clear: both;
  margin-bottom: 10px;
}
</style>
