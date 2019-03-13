<template>
    <div class="wrap">
      <div class="header">
        <p class="title">{{hotList.title}}</p>
      </div>
      <div class="content">
        <ul>
          <li v-for="(item,index) in hotList.categoryList" :key="index">
            <p class="name">{{item.categoryName}}</p>
            <img :src="item.picUrl" :alt="item.categoryName">
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
  import {mapState} from 'vuex'
    export default {
        data() {
            return {}
        },
        methods: {},
        computed: {
          ...mapState({
            hotList:state=>state.home.homeData.categoryHotSellModule||{}
          })
        },
        components: {}
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
    .content
      padding 0 28px
      ul
        display flex
        justify-content space-around
        flex-wrap wrap
        align-content space-around
        height 589px
        li
          position relative
          width 160px
          height 180px
          text-align center
          flex-shrink 0
          bg(#f5f5f5)
          &:nth-of-type(1),&:nth-of-type(2)
            width 335px
            .name
              position absolute
              top: 30%
              left: 8%
              font-size 28px
              &:after
                content ""
                display block
                width 48px
                height 2px
                bg(#333)
                border(1px,#333)
                margin-top 10px
            img
              height 100%
              width auto
              f2()
          .name
           margin 5px
          img
            width 80%
</style>
