<template>
    <div class="warp">
      <Top></Top>
      <section class="up">
          <div class="title"></div>
          <div class="placeholder">搜索商品,共21749款好物</div>
          <div class="button">登录</div>
      </section>
      <section class="down">
        <article class="nav">
          <ul ref="nav" >
            <li v-for="(item,index) in nav" :key="index"
                :class="{active:$route.query.categoryId==menuIdList[item]||!$route.query.categoryId&&item=='推荐'}"
                @click="$router.push('/home?categoryId='+(menuIdList[item]||''))"
            >{{item}}</li>
          </ul>
          <div class="gradual" @click="imageOpen = !imageOpen">
            <img :class="{imageOpen}" src="../images/jiantou.png">
          </div>
        </article>
        <aside v-show="imageOpen">
          <p>全部频道</p>
          <ul>
            <li
              v-for="(item,index) in nav" :key="index"
              :class="{active:$route.query.categoryId==menuIdList[item]||!$route.query.categoryId&&item=='推荐'}"
              @click="$router.push('/home?categoryId='+(menuIdList[item]||''))"
            >
              <div>{{item}}</div>
            </li>
          </ul>
        </aside>

      </section>
      <div class="mask" v-show="imageOpen" @click="imageOpen = !imageOpen"></div>
    </div>
</template>

<script>
  import Top from '../Top/Top.vue'
  import BScroll from 'better-scroll'
  import {mapGetters} from 'vuex'
    export default {
        data() {
            return {
              nav:['推荐','居家生活','服饰鞋包','美食酒水','个护清洁', '母婴亲子','运动旅行','数码家电','礼品特色'],
              imageOpen:false
            }
        },
        mounted(){

        },
        methods: {
        },
        computed: {
          ...mapGetters(['menuIdList'])
        },
        components: {
          Top
        },
      watch:{
          menuIdList(){
            this.$nextTick(()=>{
                this.navScroll = new BScroll(".nav", {
                  scrollX: true,
                  click: true
                })
                this.navScroll.scrollToElement('.nav>ul .active', 0)
            })

          }
      }

    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../mix/mix.styl"
  .up
    position relative
    z-index 10
    bg(white)
    height 88px
    display flex
    padding 0px 8px
    justify-content space-around
    align-items center
    .title
      width 138px
      height 40px
      background url("../images/header.png") 0px -100px no-repeat
      background-size 100%
    .placeholder
      margin-top 3px
      width 442px
      height 56px
      padding-left 2em
      box-sizing border-box
      line-height 56px
      background url("../images/seach.png") 30px 14px no-repeat
      font-size 30px
      font-family PingFangSC-Light,helvetica,'Heiti SC'
      background-color #ededed
      border-radius 10px
      color #666
    .button
      width 74px
      height 40px
      border(1px,red)
      line-height 40px
      text-align center
      border-radius 6px
      color red
  .down
    position relative
    .nav
      /*overflow hidden*/
      position relative
      overflow hidden
      ul
        display flex
        flex-wrap nowrap
        width max-content
        padding-right 130px
        padding-left 20px
        li
          flex-shrink 0
          height 60px
          line-height 60px
          margin 0 10px
          padding 0 10px
          font-size 30px
          &.active
            color #b4282d
            border-bottom 3px #b4282d solid
      .gradual
        width 100px
        height 60px
        position absolute
        right 0
        top 0
        z-index 10
        bg(white)
        box-shadow -0px 0 50px 50px white
        display flex
        align-items center
        justify-content space-around
        & img
            vertical-align middle
            transition .5s
            &.imageOpen
              transform rotate(180deg)
    aside
      position absolute
      top: 0
      left: 0
      bg(white)
      height 372px
      font-size 27px
      z-index 9
      p
        line-height 60px
        padding-left  1em
      ul
        display flex
        flex-wrap wrap
        justify-content flex-start
        align-content space-between
        padding-left  15px
        li
          border(1px,#ccc)
          border-radius 2px
          bg(#fafafa)
          width 148px
          height 54px
          margin 20px 15px
          text-align center
          line-height 56px
          &.active
            border(1px,#b4282d)
            color #b4282d
  .mask
    position: absolute;
    left 0
    top 0
    bottom 0
    z-index 7
    width 100%
    height 100%
    bg(rgba(0,0,0,.5))
</style>
