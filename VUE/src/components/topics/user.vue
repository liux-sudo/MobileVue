<template>
  <div class="user">
      <div class="content1">
          <div class="header1">
              <ul>
                  <li><a href="">主页</a><span>/</span></li>
              </ul>
          </div>
          <div class="inner">
                <div class="img"><img :src="avatar_url"></div>
                <a href="">{{loginname}}</a>
          </div>
            <div class="jf">
                {{score}}<span>积分</span>
            </div>
          <div class="zc">
              注册时间 天前
          </div>
          <div class="panel" v-if="recent_topics.length">
            <div class="header2">
                    最近创建的话题
            </div>
            <div class="cell" v-for="(recent_topic,index) in recent_topics" :key="index">
                <img v-lazy="recent_topic.author.avatar_url" alt="">
                <router-link :to="'/show/'+recent_topic.id">
                    {{recent_topic.title}}<br>
                    <span></span>
                </router-link>
            </div>
        </div>
        <div class="panel" v-if="recent_replies.length">
            <div class="header2">
                    您参与过得话题
            </div>
            <div class="cell" v-for="(recent_replie,index) in recent_replies" :key="index">
                <img v-lazy="recent_replie.author.avatar_url" alt="">
                <router-link :to="'/show/'+recent_replie.id">
                    {{recent_replie.title}}<br>
                    <span></span>
                </router-link>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import {getUser} from '@/getdata/getdata.js';
import {getTopic} from '@/getdata/getdata.js';
export default {
  name: 'user',
  data () {
    return {
        loginname:'',
        avatar_url:'',
        score:'',
        recent_topics:[],
        recent_replies:[],
    }
},
 mounted() {
    var loginname = this.$router.history.current.params.loginname
     getUser(loginname).then((data)=>{
         this.loginname = data.data.data.loginname
         this.avatar_url = data.data.data.avatar_url
         this.score = data.data.data.score
         this.recent_topics = data.data.data.recent_topics
         this.recent_replies = data.data.data.recent_replies
     })
 },
}
</script>

<style scoped lang='scss'>
@import "../../assets/sass/base";
.user{
    width:rem(720px);
    margin: 0 auto;
    .content1{
        background-color: #fff;
        width:100%;
        // margin-top: rem(340px);
        .header1{
            padding: rem(20px) rem(15px);
            background-color: #f6f6f6;
            margin-top: rem(30px);
            font-size: rem(26px);
            border-radius: rem(20px) rem(20px) 0 0;
            a{
                color: #369219;
            }
            span{
                padding: 0 rem(12px);
                color: #ccc;
            }
        }
    }
    .inner{
        padding:rem(15px);
        border-top: 1px solid #e5e5e5;
        line-height: rem(20px);
        border-radius: 0 0 rem(5px) rem(5px);
        display: flex;
        line-height: rem(45px);
        .img{
            margin-right: rem(20px);
            img{
                width: rem(72px);
                height: rem(72px);
            }
           
        }
         a{
            color:#778087;
            font-size: rem(26px);
        }
    }
    .jf{
        padding:rem(10px) rem(15px);
        margin-top:rem(-20px);
        margin-bottom: rem(30px);
        font-size: rem(24px);
        span{
            font-size: rem(24px);
            margin-left: rem(10px);
            font-family: '正楷';
        }
    }
    .zc{
        padding:rem(10px) rem(15px);
        margin-top: rem(-20px);
        padding-bottom: rem(40px);
        font-size: rem(26px);
        color: #999;
    }
    .panel{
        .header2{
            padding:rem(20px) rem(15px);
            background: #f6f6f6;
            font-size: rem(26px);
            color:#1c6132;
        }
        .cell,.dark{
            padding:rem(20px) rem(15px);
            border-top: 1px solid #f0f0f0;
        }
        .dark{
            font-size: rem(26px);
        }
        .cell{
            display: flex;
            align-items: center;
            img{
                width: rem(55px);
                height: rem(55px);
                margin-right: rem(20px);
            }
            a{
                color: #08c;
                font-size: rem(26px);
                display: inline-block;
                max-width: rem(450px);
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap
            }
        }
    }
    
}

</style>
