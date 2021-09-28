<template>
  <div class="blogname">
    サイト名: {{ bname }}
  </div>
</template>

<script>
export default {
  name: 'BlogName',
  props: [ 'bname' ]
}
</script>

<style scoped>
.blogname {
  font-size: 0.8rem;
  color: black;
}
</style>