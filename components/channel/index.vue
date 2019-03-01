<template>
  <div class="container">
    <div class="container-item">
      <div class="container-title">
        <h2>
          <img class="container-img" src="@/assets/img/douban.png" alt="最新视频">
          <span>最新视频</span>
          <span class="from">来自
            <a>豆瓣电影</a>
          </span>
        </h2>
      </div>
      <div class="my-swiper">
        <div class v-swiper:mySwiper="swiperOption">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="swiperSlide in swiperSlides">
              <a href="http://element-cn.eleme.io/#/zh-CN/component/carousel">
                <img :src="swiperSlide.cover" style="width: 210px; height: 118px;">
              </a>
            </div>
          </div>
          <div class="swiper-pagination swiper-pagination-bullets"></div>
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { ERR_OK } from "assets/js/config";
import swiper from "swiper";

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
      swiperSlides: [
        {
          cover: "https://img1.doubanio.com/img/trailer/medium/2527544359.jpg?",
          title: "摩天营救"
        },
        {
          cover: "https://img3.doubanio.com/img/trailer/medium/2541575783.jpg?",
          title: "流浪地球"
        },
        {
          cover: "https://img3.doubanio.com/img/trailer/medium/2541663242.jpg?",
          title: "大黄蜂"
        },
        {
          cover: "https://img3.doubanio.com/img/trailer/medium/2536081251.jpg?",
          title: "海王"
        },
        {
          cover: "https://img1.doubanio.com/img/trailer/medium/2544993129.jpg?",
          title: "白蛇缘起"
        },
        {
          cover: "https://img3.doubanio.com/img/trailer/medium/2547128825.jpg?",
          title: "飞驰人生"
        }
      ],
      swiperOption: {
        loop: true,
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 30,
        loopFillGroupWithBlank: true,
        pagination: {
          el: ".swiper-pagination",
          dynamicBullets: true,
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        on: {
          slideChange() {
            console.log("onSlideChangeEnd", this);
          },
          tap() {
            console.log("onTap", this);
          }
        }
      }
    };
  },
  // mounted() {
  //   console.log("app init", this);
  //   setTimeout(() => {
  //     // this.banners.push('http://www.dilidili.name/uploads/allimg/180419/290_2007164591.jpg')
  //     console.log("banners update");
  //   }, 3000);
  //   console.log(
  //     "This is current swiper instance object",
  //     this.mySwiper,
  //     "I will slideTo banners 3"
  //   );
  //   // this.mySwiper.slideTo(3);
  // },
  components: {
    swiper
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
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
  margin-bottom: 1rem;
}

.container-title h2 {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.container-img {
  margin-right: 8px;
  border-radius: 50%;
  overflow: hidden;
  width: 32px;
  height: 32px;
}

.container-item {
  display: flex;
  vertical-align: top;
  flex-direction: column;
}

/* 外层容器限制高度 */
.my-swiper {
  height: 150px;
  width: 690px;

  .swiper-slide {
    // height: 100px
    // width: 100px
    text-align: center;
    font-size: 38px;
    font-weight: 700;
    background-color: #eee;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-pagination {
    > .swiper-pagination-bullet {
      background-color: red;
    }
  }
}

.from {
  color: hsl(0, 0%, 53.3%);
  margin-left: 8px;
  // display: block;
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
