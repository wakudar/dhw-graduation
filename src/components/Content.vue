<template>
  <div class="content-wrapper">
    <div v-for="item in items" :key="item" class="content">
      <a :href="item.link" target="_blank">
        <BlogImg :link="item.img"/>
      </a>
      <div class="content-info">
        <BlogName :bname="item.bname"/>
        <CreatorName :crname="item.crname"/>
        <CourseName :coname="item.coname"/>
        <CreatedAt :created="item.created"/>
      </div>
    </div>
  </div>
</template>

<script>
import BlogImg from './blog/BlogImg.vue'
import BlogName from './blog/BlogName.vue'
import CreatorName from './blog/CreatorName.vue'
import CourseName from './blog/CourseName.vue'
import CreatedAt from './blog/CreatedAt.vue'

export default {
  name: 'Content',
  components: {
    BlogImg,
    BlogName,
    CreatorName,
    CourseName,
    CreatedAt
  },
  data () {
    return {
      items : [
        { link: 'https://gold-cookingsake.jp/', img: 'kinnoryourishu.png', bname: '金の料理酒', crname: 'デジハリ太郎', coname: 'WEBデザイナー', created: '2020/2/2' },
        { link: 'http://www.kokei-ryo.jp/index.html', img: 'kokeiryo.png', bname: '壺溪塾寮', crname: 'デジハリ花子', coname: 'WEBデザイナー', created: '2020/6/2' },
        { link: 'https://www.kokei.ac.jp/', img: 'kokei.png', bname: '壺溪塾', crname: 'デジハリ正男', coname: 'WEBデザイナー', created: '2021/2/2' },
        { link: 'https://daisukenishino.kumamoto.jp/', img: 'nishino.png', bname: 'nisino-daisuke', crname: 'デジハリ花子', coname: '動画', created: '2020/2/2' },
        { link: 'https://sunatori-portal.com/', img: 'sunatori.png', bname: 'sunatori-portal', crname: 'デジハリ幸子', coname: '動画', created: '2020/2/2' },
        { link: 'https://google.com', img: 'google.png', bname: 'テスト２', crname: 'デジハリ花子', coname: '動画', created: '2020/2/2' }
      ]
    }
  }
}
</script>

<style scoped>
.content-wrapper {
  width: 90%;
  margin: 0 auto 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.content {
  width: 28%;
  margin: 10px 2%;
}
.content-info {
  font-size: 0.7rem;
  margin: 10px 0 20px;
  color: #848484;
}

@media screen and (max-width: 768px) {
  .content {
    width: 45%;
  }
}

@media screen and (max-width: 600px) {
  .content {
    width: 80%;
  }
}
</style>