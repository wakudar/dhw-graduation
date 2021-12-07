<template>
  <Header/>
  <Content :year="year"/>
  <ScrollTopButton />
  <Footer />
</template>

<script>
import Header from '@/components/header/Header.vue'
import Content from '@/components/Content.vue'
import ScrollTopButton from '@/components/ScrollTopButton.vue'
import Footer from '@/components/footer/Footer.vue'

export default {
  name: 'CreatedAt2021',
  components: {
    Header,
    Content,
    ScrollTopButton,
    Footer
  },
  data () {
    return {
      year: '2021'
    }
  }
}
</script>