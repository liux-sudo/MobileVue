<template>
  <div class="index">
    <div class="top">
        <!-- <div class="info">
            <img src="../../static/images/1.jpg" alt="">
        </div> -->
        <nav class="top2">
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <router-link to="/" class="swiper-slide" tag="div">全部</router-link>
                </div>
                <div class="swiper-wrapper">
                    <router-link to="/good" class="swiper-slide" tag="div">精华</router-link>
                </div>
                <div class="swiper-wrapper">
                    <router-link to="/weex" class="swiper-slide" tag="div">weex</router-link>
                </div>
                <div class="swiper-wrapper">
                    <router-link to="/share" class="swiper-slide" tag="div">分享</router-link>
                </div>
                <div class="swiper-wrapper">
                    <router-link to="/ask" class="swiper-slide" tag="div">问答</router-link>
                </div>
                <div class="swiper-wrapper">
                    <router-link to="/job" class="swiper-slide" tag="div">招聘</router-link>
                </div>
                
            </div>
        </nav>
        <router-view></router-view>
    </div>
  
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";

export default {
  name: "index",
  data() {
    return {};
  },
  
  mounted() {
    var swiper = new Swiper(".swiper-container", {
      slidesPerView: 4,
      spaceBetween: 15,
      freeMode: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      }
    });
    $(window).scroll(function(){
      var Stop = $(window).scrollTop();
      var top = $('.top2').offset().top;
      if(Stop > 193){
        $('.top2').addClass('top3')
        $('.topics').css({marginTop:'53px'})
      }else{
        $('.top2').removeClass('top3')
        $('.topics').css({marginTop:'0'})
      }
    })
  }
}
</script>

<style scoped lang='scss'>
@import "../assets/sass/base";
.info {
  width: rem(740px);
  height: rem(100px);
  margin: rem(30px) auto rem(20px);
  img {
    width: 100%;
    height: rem(100px);
  }
}

.top3{
  position: fixed;
  top:0;
  left:50%;
  margin-left: rem(-720px/2) !important;
}

nav.top2 {
  // position: fixed;
  // top:rem(333px);
  // left:50%;
  width: rem(720px);
  padding: rem(15px) 0;
  background: #ddd;
  margin: 0 auto;
  // margin-left: rem(-720px/2);
  border-radius: rem(10px);
  overflow: hidden;
  .swiper-container {
    width: rem(740px);
    display: flex;
    .swiper-wrapper {
      div {
        padding: rem(10px) 0;
        border-radius: rem(20px);
        // width: rem(90px) !important;
        margin-right: 0 !important;
        font-size: rem(30px);
        text-align: center;
      }
    }
  }
}
.router-link-exact-active {
  background: yellowgreen;
  color: #fff;
}
</style>
