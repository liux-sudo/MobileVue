<template>
  <div class="all">
    <div class="list">
      <loading v-if='!topics.length'></loading>
      <div class="topics">
        <div class="topic" v-for="(topic,index) in topics" :key="index">
          <router-link :to='"user/"+topic.author.loginname'>
            <img v-lazy="topic.author.avatar_url" alt="">
          </router-link>
          
          <div class="tab">
            <div v-if='topic.top' class="top">置顶</div>
            <div v-else-if='topic.good' class="good">精华</div>
            <div v-else>{{tabs[topic.tab]}}</div>
          </div>
          <router-link :to="'show/'+topic.id" tag="div" class="title">
            {{topic.title}}
            <p>{{topic.reply_count}} / {{topic.visit_count}}</p>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import loading from "./loading";
export default {
  name: "all",
  data() {
    return {
      tabs:{
        ask:'问答',
        share:'分享',
        weex:'weex',
        job:'招聘'
      }
    };
  },
  props:['topics'],
  components:{
      loading
  }
};
</script>

<style scoped lang='scss'>
@import "../../assets/sass/base";
@import '../../assets/sass/topicsList';
</style>