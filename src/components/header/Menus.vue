<template>
  <div class="navigation">
    <nav class="navigation-menu">
      <i class="fa fa-bars" aria-hidden="true" @click="visible = !visible"></i>
    </nav>
    <transition>
      <ul class="menus" v-if="visible">
        <p>
          Category
          <i class="fa fa-times-circle" @click="naviToggle"></i>
        </p>
        <li><router-link to="/">TOP</router-link></li>
        <li><router-link to="/web-designer">WEBデザイナー専攻</router-link></li>
        <li><router-link to="/cg-creator">CGクリエイター専攻</router-link></li>
        <li>CG GYM</li>
        <hr />
        <p>Archives</p>
        <li>2021</li>
        <li>2020</li>
        <li>2019</li>
      </ul>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'Menus',
    data () {
      return {
        visible: false
      }
    },
    methods: {
      naviToggle: function() {
        this.visible = !this.visible;
      }
    }
  }
</script>

<style scoped>
.navigation {
  align-self: center;
}
.navigation-menu i {
  background: #FF7000;
  color: white;
  padding: 14px 14px;
  border-radius: 50%;
  width: 14px;
  cursor: pointer;
}
.menus {
  position: fixed;
  top: 0;
  right: 0;
  width: 200px;
  height: 100vh;
  margin: 0;
  text-align: left;
  padding-left: 20px;
  background: #FF7000;
}
.menus p {
  color: white;
  font-size: 1.5rem;
  padding: 10px 0;
  margin-bottom: .5em;
}
.menus hr {
  margin: 20px 10px 10px 0;
  border-color: white;
  border-style: solid;
}
.menus li, .menus a {
  color: white;
  font-size: .8rem;
  line-height: 1.6rem;
  list-style: none;
  text-decoration: none;
}
.fa-times-circle {
  margin-left: 25px;
  font-size: 2.5rem;
}

/* フェード処理 */ 
.v-enter-active,
.v-leave-active {
  transition: opacity .5s;
}
.v-enter, .v-leave-to {
  opacity: 0;
}
/* フェード処理 */

@media screen and (max-width: 768px) {
  .navigation {
    order: 2;
    margin-right: 2%;
  }
}
</style>