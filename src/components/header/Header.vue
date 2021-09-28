<template>
  <header>
    <Logo />
    <Title />
    <Menus />
  </header>
</template>

<script>
import Logo from './Logo.vue'
import Title from './Title.vue'
import Menus from './Menus.vue'

export default {
  name: 'Header',
  components: {
    Logo,
    Title,
    Menus
  }
}
</script>

<style scoped>
header {
  width: 100%;
  padding: 0 1vw;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 175px auto 150px;
  grid-template-rows: 150px;
  text-align: center;
}

@media screen and (max-width: 768px) {
  header {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 20px;
  }
}
</style>