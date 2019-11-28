<template>
  <div class="weex">
    <topics-list :topics='topics'></topics-list>
    <div class="datainfo" v-show='isHide'>大哥 ，真的没数据了！</div>
    <infinite-loading @infinite="infiniteHandler" v-if="isShow"></infinite-loading>
  </div>
</template>

<script>
import {getTopics} from "@/getdata/getdata.js";
import topicsList from '@/components/topics/topicsList';
import InfiniteLoading from 'vue-infinite-loading';
export default {
  name: 'weex',
  data () {
    return {
      topics:[],
      page:1,
      isShow:false,
      isHide:false,
    }
  },
  components:{
    topicsList,
    InfiniteLoading
  },
  mounted() {
    getTopics({tab:'weex',limit:15,page:this.page}).then((data)=>{
      this.topics = data.data.data
      this.isShow = true
    })
  },
  methods: {
    infiniteHandler($state) {
      setTimeout(() => {
        getTopics({tab:'weex',limit:15,page:++this.page}).then((data)=>{
          this.topics = this.topics.concat(data.data.data)
          if(data.data.data.length == 0){
            this.isShow = false
            this.isHide = true
          }
        })
        $state.loaded();
      }, 1000);
    },
  },
}
</script>

<style scoped lang='scss'>
@import "../../assets/sass/base";


</style>
