<template>
  <div class="show">
    <div class="header1">
      <span class="tab">
          <span class="top" v-if="top">置顶</span>
          <span class="good" v-else-if="good">精华</span>
          <span v-else style="line-height:1rem">{{tabs[tab]}}</span>
      </span>
      <span class="title">{{title}}</span>
      <div class="info">
        <span>作者：{{loginname}}</span><span>{{visit_count}}次浏览</span><span>来自 {{tabs[tab]}}</span>
      </div>
      <div class="content" v-html="content"></div>
      </div>
  </div>
</template>
<script>
import { getTopic } from "@/getdata/getdata.js";
export default {
  name: "show",
  data() {
    return {
      tabs: {
        share: "分享",
        job: "招聘",
        ask: "问答",
        weex: "weex"
      },
      tab: "",
      title: "",
      top: "",
      good: "",
      loginname: "",
      visit_count: "",
      content: ""
    };
  },
  mounted() {
    var id = this.$route.params.id;
    getTopic(id).then(data => {
      this.tab = data.data.data.tab;
      this.title = data.data.data.title;
      this.top = data.data.data.top;
      this.good = data.data.data.good;
      this.loginname = data.data.data.author.loginname;
      this.visit_count = data.data.data.visit_count;
      this.content = data.data.data.content;
    });
  }
};
</script>

<style scoped lang='scss'>
@import "../../assets/sass/base";
.header1 {
  box-sizing: border-box;
  width: rem(720px);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: wrap;
  margin: 0 auto;
  padding: rem(18px) rem(10px) rem(20px) ;
  border-radius: rem(5px);
  background: #fff;
  .tab {
    span {
      padding: rem(10px) rem(20px);
      background: yellowgreen;
      color: #333;
      font-size: rem(28px);
      text-align: center;
      line-height: rem(50px);
      border-radius: rem(6px);
    }
    .top {
      background: #8dbb39;
      color: #fff;
    }
    .good {
      background: red;
      color: #fff;
    }
  }
  .title {
    font-size: rem(40px);
    color: #333;
    font-weight: bold;
    line-height: rem(50px);
  }
  .info{
    margin-top: rem(20px);
    color: #888;  
    border-bottom: 1px solid #eee;
    padding-bottom:rem(20px);
    span::before{
      content: "•";
      margin: 0 rem(10px);
      
    }
  }
  .content{
    padding: rem(10px) rem(30px);
    overflow: hidden;
    white-space: wrap;
    text-overflow: ellipsis;
    /deep/ img{
      width:100%;
      vertical-align: center;
    }
    /deep/ h4{
      font-weight: bold;
      font-size:rem(40px);
      border-bottom: 1px solid #eee;
      margin: rem(20px) 0;
    }
  }
  /deep/ p{
    font-size: rem(30px);
    line-height: rem(40px);
    white-space: pre-wrap;
    margin: rem(20px) 0;
  }
  /deep/ ul{
    list-style:initial;
    margin: 0 0 rem(50px) rem(40px);
    li{
      line-height: rem(45px);
      font-size: rem(26px);
    }
  }
}
</style>
