<template>
  <img :src="getSrc" class="blog-image" />
</template>

<script>
export default {
  name: 'BlogImg',
  props: [ 'link' ],
  computed: {
    getSrc: function() {
      return require("@/assets/" + this.link)
    }
  }
}
</script>

<style scoped>
.blog-image {
  width: 100%;
  height: 25vw;
  /* border: 1px solid #707070; */
  /* opacity: 0.5; */
  /* background: rgba(110, 110, 110, 0.5); */
}
.blog-image:hover {
  box-sizing: border-box;
  border-width: 0 10px 10px 0;
  border-color: #ED6C00;
  border-style: solid;
  transition: .4s;
}

@media screen and (max-width: 768px) {
  .blog-image {
    height: 40vw;
  }
}

@media screen and (max-width: 600px) {
  .blog-image {
    height: 70vw;
  }
}
</style>