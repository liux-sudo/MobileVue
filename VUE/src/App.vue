<template>
  <div id="app">
      <!-- header -->
      <div class="header">
        <div class="nav">
          <a href="">
            <img src="./assets/logo.png" alt="">
            Vue.js
          </a>
          <div class="search">
            <span class="iconfont iconfangdajing3"></span>
          </div>
          <ul>
            <li><a href="">首页</a></li>
            <li class="li"><a>微信号</a></li>
            <li><a>参考资料</a></li>
            <li><a>注册</a></li>
            <li><a>登录</a></li>
            <li><a>关于</a></li>
          </ul>
        </div>
      </div>
      <!-- header END -->
      <!-- 弹窗 -->
      <div class="tc">
          <div> X </div>
          <img src="../static/images/code.jpg" alt="">
      </div>
      <!-- 弹窗 END -->
      <!-- top -->
      <div class="top1">返回顶部</div>
      <!-- top END -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted() {
   $('.li').click(function(){
     $('.tc').fadeIn(1000);
     $('.tc').css({background:'rgba(0,0,0,.8)',width:'100%',height:'100%'})
   })
   $('.tc div').click(function(){
     $('.tc').fadeOut(800)
   })
    $(window).scroll(function(){
      var winH = $(window).height();
      var Stop = $(window).scrollTop();
      if(Stop >= winH/2){
        $('.top1').fadeIn()
      }else{
        $('.top1').fadeOut()
      }
    })
    $(".top1").click(function(){
      $('html,body').animate({
        scrollTop:0,
      },500)
    })
  },
}
</script>

<style lang='scss'>
@import './assets/sass/base';

.tc{
  display: none;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 20;
  position: fixed;
  div{
    width:rem(50px);
    height: rem(50px);
    font-size: rem(35px);
    text-align: center;
    line-height: rem(50px);
    position: absolute;
    right: rem(10px);
    top: rem(120px);
    border-radius: rem(50px);
    background: red;
  }
    img{
      width: rem(720px);
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      margin: 0 auto;
      margin-top:25%;
  }
}

.top1{
  display:none;
  width: rem(50px);
  height: rem(200px);
  font-size: rem(28px);
  text-align: center;
  line-height: rem(50px);
  border-radius: rem(18px) 0 0 rem(18px);
  background: #ccc;
  opacity: .7;
  position: fixed;
  right: 0;
  top:rem(700px);
  z-index: 10;
}

  .header{
    // position:fixed;
    // top:0;
    // left:50%;
    width: rem(720px);
    margin: 0 auto;
    // margin-left:rem(-720px/2);
    background: #1c6132;
    padding: rem(10px); 
    box-sizing: border-box;
    .nav{
      width: rem(680px);
      height: 100%;
      margin: 0 auto;
      a{
        width: rem(160px);
        height: rem(45px); 
        color: #fff;
        font-size: rem(35px);
        font-weight: bold;
        img{
          width: rem(80px);
          vertical-align: middle;
        }
      }
      ul{
        display:flex;
        flex-wrap: wrap;
        li{
          font-size: rem(28px);
          padding: rem(20px);
          color: #fff;
          font-weight: bold;
          font-family: '楷体';
        }
      }
    }
    .search{
      width: rem(450px);
      height: rem(50px);
      background: #4f9639;
      margin-top: rem(20px);
      border-radius: rem(30px);
      span{
        font-size: rem(40px);
        font-weight: bold;
        color: #333;
        line-height: rem(50px);
        margin-left: rem(10px);
      }
    }
  }
</style>
