<template>
  <div class="container">
    <div class="container-item">
      <div class="container-title">
        <h2>
          <a href="#">
            <div class="container-img">
              <img src="@/assets/img/douban.png" alt="最新视频">
            </div>
            <span>最新视频</span>
            <div class="from">来自
              <a>豆瓣电影</a>
            </div>
          </a>
        </h2>
      </div>
      <div class="container-contents">
        <!-- <div class="container-contentsItem">
          <a href="#" class="contents-thumb">
            <img src="@/assets/img/thumb/2527544359.jpg" alt="">
          </a>
          <div class="container-details">
            <div class="wrapper-details">
              <h3 class="title-details">
                <a href="/watch">摩天营救</a>
              </h3>
            </div>
          </div>
        </div>-->
        <div class="container-contentsItem" v-for="(slide, index) in swiperSlides" :key="index">
          <a href="#" class="contents-thumb">
            <img :src="slide.cover" :alt="slide.title">
          </a>
          <div class="container-details">
            <div class="wrapper-details">
              <h3 class="title-details">
                <a href="/watch">{{slide.title}}</a>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { ERR_OK } from "assets/js/config";
// import { swiper, swiperSlide } from 'vue-awesome-swiper'
// import SlidesGroup from '../slides-group/slides-group'

export default {
  // created () {
  //   axios.get('/api/swiperSlides')
  //     .then(res => {
  //       res = res.data
  //       if (res.errno === ERR_OK) {
  //         this.swiperSlides = res.data
  //       }
  //     })
  //     .catch(err => {
  //       console.log(err)
  //     })
  // },
  data() {
    return {
      swiperOption: {
        autoplay: 3000,
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 30,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      },
      swiperSlides: [
        {
          cover: "https://img1.doubanio.com/img/trailer/medium/2527544359.jpg?",
          title: "摩天营救"
        },
        {
          cover: "https://img1.doubanio.com/img/trailer/medium/2527544359.jpg?",
          title: "摩天营救"
        },
        {
          cover: "https://img1.doubanio.com/img/trailer/medium/2527544359.jpg?",
          title: "摩天营救"
        },
        {
          cover: "https://img1.doubanio.com/img/trailer/medium/2527544359.jpg?",
          title: "摩天营救"
        },
        {
          cover: "https://img1.doubanio.com/img/trailer/medium/2527544359.jpg?",
          title: "摩天营救"
        },
        {
          cover: "https://img1.doubanio.com/img/trailer/medium/2527544359.jpg?",
          title: "摩天营救"
        }
      ]
    };
  },
  components: {}
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.container {
  margin-top: 24px;
  border-bottom: 1px solid hsl(0, 0%, 93.3%);
  display: flex;
  flex-direction: row;
  align-items: center;
}
.container-title {
  color: hsl(0, 0%, 6.7%);
  height: 2rem;
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 100%;
}
.container-title h2 {
  display: flex;
  flex-direction: row;
  align-content: center;
}
.container-title a {
  display: inline-flex;
  align-items: center;
  color: hsl(0, 0%, 6.7%);
}
.container-img {
  margin-right: 8px;
  border-radius: 50%;
  overflow: hidden;
  width: 32px;
  height: 32px;
}
.container-img img {
  width: 32px;
  height: 32px;
}
.container-contents {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.container-contentsItem {
  padding-right: 4px;
  margin-top: 24px;
  margin-bottom: 24px;
  width: 210px;
  overflow: hidden;
}
.container-item {
  display: flex;
  vertical-align: top;
  flex-direction: column;
}
.contents-thumb {
  width: 210px;
  height: 118px;
}
.contents-thumb img {
  width: 210px;
  height: 118px;
}
.container-details {
  display: flex;
  flex-direction: column;
}
.wrapper-details {
  display: flex;
  justify-content: center;
  /* 以后用作长标题 */
  /* padding-right: 24px; */
}
.title-details {
  color: hsl(0, 0%, 6.7%);
  margin: 8px 0 8px;
}
.title-details a {
  color: hsl(0, 0%, 6.7%);
  max-height: 3.2rem;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  -webkit-line-clamp: 2;
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 1.6rem;
}
.from {
  color: hsl(0, 0%, 53.3%);
  margin-left: 8px;
  display: block;
  max-height: 1.8rem;
  overflow: hidden;
  font-size: 1.3rem;
  font-weight: 400;
  line-height: 1.8rem;
  text-transform: none;
}
.from a {
  color: hsl(0, 0%, 6.7%);
  font-weight: 500;
}
</style>
