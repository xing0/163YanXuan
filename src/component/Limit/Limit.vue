<template>
    <div class="wrap">
      <div class="header">
        <span class="title">限时购 <span>
          <span class="bg">
         {{time[0]}}</span>
          :
          <span class="bg">{{time[1]}}</span>
          :
          <span class="bg">
         {{time[2]}}
          </span>
        </span></span>
        <span class="more">更多></span>
      </div>
      <div class="content">
        <ul>
          <li v-for="(item,index) in limit.itemList" :key="index">
            <img :src="item.picUrl" alt="">
            <p>
              <span class="price">¥{{item.activityPrice}}</span>
              &nbsp;
              <span class="oldPrice">¥{{item.originPrice}}</span>
            </p>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
  import {mapState} from 'vuex'
    export default {
        data() {
            return {
              lastTime:0
            }
        },
        methods: {
          limitStart(){
            clearInterval(this.lastTimeId)
            this.lastTime = this.limit.remainTime
            this.lastTimeId =  setInterval(()=>{
              this.lastTime-=1000
              this.lastTime<=0 &&  clearInterval(this.lastTimeId)
            },1000)
          },
          add0(sum){
            return sum<10? '0'+sum : sum
          }
        },
      mounted(){
        this.lastTime = this.limit.remainTime || 0
        this.limitStart()
      },
        computed: {
          ...mapState({
            limit:state=>state.home.homeData.flashSaleModule || {}
          }),
          // lastTime:{
          //   get() {
          //     return this.limit.remainTime
          //   },
          //   set:(n)=>{
          //     this.lastTime = n
          //     console.log(n);
          //   }
          // },
          time(){
            const {add0} = this
            const lastTime = this.lastTime
            const time = new Date(lastTime)
            const hh = time.getUTCHours()
            const mm = time.getUTCMinutes()
            const ss = time.getUTCSeconds()
            return [add0(hh),add0(mm),add0(ss),time,lastTime]
          }
        },
        components: {},
      watch:{
        limit(value){
          this.limitStart()
        }
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../mix/mix.styl"
  .wrap
    padding-bottom 26px
    .header
      display flex
      justify-content space-between
      align-items  center
      height 100px
      &>*
        margin 0 40px
      .title
        font-size 32px
      .more
        font-size 28px
      span
        font-size 24px
      .bg
        background-color #333
        color white
        text-align center
        padding 3px
        border-radius 5px
    .content
      padding 0 28px 20px
      ul
        display flex
        flex-wrap wrap
        justify-content space-around
        align-content space-between
        height 580px
        li
          text-align center
          img
            width 216px
            bg(#f5f5f5)
            margin-bottom 10px
          .price
            color red
            font-size 28px
          .oldPrice
            font-size 24px
            text-decoration line-through


</style>
