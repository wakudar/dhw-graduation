<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Header />
    <Content />
    <ScrollTopButton />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/header/Header.vue'
import Content from '@/components/Content.vue'
import ScrollTopButton from '@/components/ScrollTopButton.vue'
import Footer from '@/components/footer/Footer.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Content,
    ScrollTopButton,
    Footer
  }
}
</script>
