<template>
  <div class="header-title">
    <h1>- Graduation Work Gallery -</h1>
    <p>studio kumamoto</p>
  </div>
</template>

<style scoped>
.header-title {
  padding-top: 30px;
}
.header-title h1 {
  font-size: 1.5rem;
  color: #646464;
}
.header-title p {
  font-size: 1rem;
  color: #757575;
}

@media screen and (max-width: 768px) {
  .header-title {
    order: 3;
    width: 100%;
    padding-top: 10px;
  }
}

@media screen and (max-width: 400px) {
  .header-title h1 {
    font-size: 1.2rem;
  }
  .header-title p {
    font-size: 0.8rem;
  }
}
</style>