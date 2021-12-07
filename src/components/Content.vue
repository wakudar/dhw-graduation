<template>
  <div class="content-wrapper">
    <div v-if="course" class="menu-title">Category: {{ course }}</div>
    <div v-if="year" class="menu-title">Archives: {{ year }}</div>
    <div v-for="item in getMenuItems" :key="item" class="content">
      <div>
        <a :href="item.link" target="_blank">
          <BlogImg :link="item.img"/>
        </a>
        <div class="content-info" >
          <BlogName :bname="item.bname"/>
          <CreatorName :crname="item.crname"/>
          <CourseName :coname="item.coname"/>
          <CreatedAt :created="item.created"/>
        </div>
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
  props: [ 'course', 'year' ],
  methods: {
    getYear : function (val) {
      return val.split('/')[0]
    }
  },
  data () {
    return {
      items : [
        { link: 'https://kumadeji.jp', img: '202111yamamoto.jpg', bname: 'くまデジ', crname: '山本', coname: 'WEBデザイナー', created: '2021/11' },
        { link: 'https://graduation-work.net/archives/202111nishino/headermovie_re.mp4', img: '202111nishino-2.jpg', bname: '熊本リビング新聞社ヘッダー動画', crname: '西野', coname: '動画クリエイター', created: '2021/11' },
        { link: 'https://graduation-work.net/archives/202111nishino', img: '202111nishino.jpg', bname: '熊本リビング新聞社', crname: '西野', coname: 'WEBデザイナー', created: '2021/11' },
        { link: 'https://graduation-work.net/archives/202110nakano', img: '202110nakano.jpg', bname: 'BURROW', crname: '中野', coname: 'WEBデザイナー', created: '2021/10' },
        { link: 'https://graduation-work.net/archives/202110koga', img: '202110koga.jpg', bname: 'みりょくラボ', crname: '古閑', coname: 'WEBデザイナー', created: '2021/10' },
        { link: 'https://graduation-work.net/archives/202108yoshizato', img: '202108yoshizato.jpg', bname: "T's Barista", crname: '吉里', coname: 'WEBデザイナー', created: '2021/08' },
        { link: 'https://graduation-work.net/archives/202107uehara/monky.MP4', img: '202107uehara.jpg', bname: 'monky.mp4', crname: '上原', coname: '動画クリエイター', created: '2021/07' },
        { link: 'https://graduation-work.net/archives/202106fujiki/para-HTML', img: '202106fujiki.jpg', bname: 'PARAFUSE', crname: '藤木', coname: 'WEBデザイナー', created: '2021/06' },
        { link: 'https://graduation-work.net/archives/202105shigeoka/', img: '202105shigeoka.jpg', bname: '熊本博愛病院', crname: '重岡', coname: 'WEBデザイナー', created: '2021/05' },
        { link: 'https://graduation-work.net/archives/202011umezaki/portfolio.mp4', img: '202011umezaki.jpg', bname: '大栄通信施設株式会社PR動画', crname: '梅崎', coname: '動画クリエイター', created: '2020/11' }
      ]
    }
  },
  computed: {
    getMenuItems() {
      return this.items.filter(e => {
        return this.course === '' || e.coname === this.course || this.getYear(e.created) === this.year
      })
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
  justify-content: flex-start;
}
.menu-title {
  display: block;
  width: 90%;
  margin: 30px 2%;
  color: #757575;
  font-size: .7rem;
}
.content {
  width: 29.25%;
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
    width: 100%;
  }
}
</style>