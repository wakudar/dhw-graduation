<template>
  <transition>
    <div v-show="visible" class="scroll-top">
      <i class="fa fa-chevron-circle-up" @click="scrollTop"></i>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'ScrollTopButton',
  data () {
    return {
      visible: false
    }
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    // スクロールが150pxできたらボタンを表示する
    handleScroll() {
      this.scrollY = window.scrollY;
      if (!this.visible) {
        this.visible = window.scrollY > 150;
      } else if (window.scrollY < 140) {
        this.visible = !this.visible;
      }
    },
    // クリックしたら上に移動する
    scrollTop: function() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  }
}
</script>

<style scoped>
.scroll-top {
  color: #707070;
  position: relative;
}
.scroll-top i {
  position: fixed;
  bottom: 50px;
  right: 10px;
  font-size: 3em;
  padding: 5px;
  cursor: pointer;
}

/* フェード処理 */
.v-enter {
  opacity: 0;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 1s;
}

.v-enter-to {
  opacity: 1;
}

.v-leave-to {
  opacity: 0;
  transition: opacity .5s;
}
/* フェード処理 */
</style>