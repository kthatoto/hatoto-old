<template>
  <div class="skills">
    <h2 class="skills__header">Skills</h2>
    <div class="skills__list">
      <span v-for="skill in skills" :key="skill" class="skills__item">{{ skill }}</span>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      skills: ['Ruby', 'Ruby on Rails', 'Git', 'HTML/CSS', 'MySQL', 'JavaScript', 'AWS', 'shell', 'Ansible', 'Processing', 'Vim', 'PHP', 'Laravel', 'Docker', 'React', 'Redux', 'Elixir', 'Vue', 'Vuex', 'Go', 'LaTeX']
    }
  }
}
</script>
<style lang="scss" scoped>
.skills {
  &__header {
    margin-bottom: 30px;
  }
  &__list {
    width: 400px;
    height: 400px;
  }
  &__item {
    display: inline-block;
    margin: 3px;
    padding: 5px 10px;
    background-color: black;
    color: white;
    border-radius: 3px;
  }
}
</style>
