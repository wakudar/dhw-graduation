<template>
  <router-view/>
</template>

<style>
#app {
  font-family: kiro, "游ゴシック", sans-serif;
  width: 100%;
  box-sizing: border-box;
  letter-spacing: 0.2em;
  background: rgb(250, 250, 250);
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
