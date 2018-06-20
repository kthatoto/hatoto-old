<template>
  <div class="about">
    <h2 class="about__header">About</h2>
    <h3>高橋 一斗</h3>
    <h3>明治大学3年</h3>
    <h3>22歳</h3>
    <div class="separate"></div>
    <h3>趣味</h3>
    <h4>プログラミング</h4>
    <h4>プログラミング</h4>
    <h4>プログラミング</h4>
    <div class="separate"></div>
    <div class="about__tags">
      <span class="about__tag">Vim</span>
      <span class="about__tag">数学</span>
      <span class="about__tag">チョコレート</span>
      <span class="about__tag">ゲーム実況</span>
      <span class="about__tag">YouTube</span>
    </div>
  </div>
</template>
<script>
export default {
}
</script>
<style lang="scss" scoped>
.about {
  &__header {
    margin-bottom: 30px;
  }
  h4 {
    padding-left: 20px;
  }
  &__tag {
    padding: 5px 10px;
    background-color: black;
    color: white;
    border-radius: 3px;
  }
}
.separate {
  margin-top: 20px;
}
</style>
