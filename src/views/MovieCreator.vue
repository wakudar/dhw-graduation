<template>
  <Header />
  <Content :course="course" />
  <ScrollTopButton />
  <Footer />
</template>

<script>
import Header from '@/components/header/Header.vue'
import Content from '@/components/Content.vue'
import ScrollTopButton from '@/components/ScrollTopButton.vue'
import Footer from '@/components/footer/Footer.vue'

export default {
  name: 'MovieCreator',
  components: {
    Header,
    Content,
    ScrollTopButton,
    Footer
  },
  data () {
    return {
      course: '動画クリエイター'
    }
  }
}
</script>