<template>
  <a href="./" class="logo">
    <img src="@/assets/dhw-logo.png" />
  </a>
</template>

<script>
</script>

<style scoped>
.logo {
  align-self: center;
}
.logo img {
  min-width: 150px;
  width: 100%;
  padding: 0 10px;
  box-sizing: border-box;
}

@media screen and (max-width: 768px) {
  .logo {
    width: 25%;
  }
}
</style>