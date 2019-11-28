<template>
  <div class="loading">
    <div class="img">
        <img src="../../../static/images/d1.gif" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'loading',
  data () {
    return {
    }
  }
}
</script>

<style scoped lang='scss'>
@import "../../assets/sass/base";
.img{
    width: rem(720px);
    img{
        width: 100%    
    }
}

</style>
