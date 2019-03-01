<template>
  <!-- You can find this swiper instance object in current component by the "mySwiper"  -->
  <div class="my-swiper">
    <div class v-swiper:mySwiper="swiperOption">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="banner in banners">
          <a href="http://element-cn.eleme.io/#/zh-CN/component/carousel">
            <img :src="banner" style="width: 210px; height: 118px;">
          </a>
        </div>
      </div>
      <div class="swiper-pagination swiper-pagination-bullets"></div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      banners: [
        "https://img1.doubanio.com/img/trailer/medium/2527544359.jpg?",
        "https://img3.doubanio.com/img/trailer/medium/2541575783.jpg?",
        "https://img3.doubanio.com/img/trailer/medium/2541663242.jpg?",
        "https://img3.doubanio.com/img/trailer/medium/2536081251.jpg?",
        "https://img1.doubanio.com/img/trailer/medium/2544993129.jpg?",
        "https://img3.doubanio.com/img/trailer/medium/2547128825.jpg?"
        // "https://img1.doubanio.com/img/trailer/medium/2527544359.jpg?",
        // "https://img1.doubanio.com/img/trailer/medium/2527544359.jpg?",
        // "https://img1.doubanio.com/img/trailer/medium/2527544359.jpg?"
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
  mounted() {
    console.log("app init", this);
    setTimeout(() => {
      // this.banners.push('http://www.dilidili.name/uploads/allimg/180419/290_2007164591.jpg')
      console.log("banners update");
    }, 3000);
    console.log(
      "This is current swiper instance object",
      this.mySwiper,
      "I will slideTo banners 3"
    );
    // this.mySwiper.slideTo(3);
  }
};
</script>


<style lang="stylus" rel="stylesheet/stylus" scoped>
// 外层容器限制高度
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
</style>