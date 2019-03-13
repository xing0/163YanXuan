<template>
    <div class="wrap">
      <div class="header">
        <span class="title">品牌制造商直供</span>
        <span class="more">更多></span>
      </div>

      <div class="content">
        <ul>
          <li v-for="(item,index) in tagList" :key="index">
            <div class="info">
              <p class="name">{{item.name}}</p>
              <p class="price">{{item.floorPrice}}元起
                <span class="isNew" v-if="item.newOnShelf">&nbsp;上新&nbsp;</span>
              </p>
            </div>

            <img class="shop" :src="item.picUrl" :alt="item.picUrl">
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
            tagList:state=>state.home.homeData.tagList || []
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
    ul
      display flex
      justify-content space-around
      flex-wrap wrap
      padding 0 26px
      li
        position relative
        width 343px
        .info
          position absolute
          top 0
          left 50%
          transform translateX(-50%)
          margin-top 30px
          font-size 28px
          width max-content
          text-align center
          .price
            font-size 24px
            color #7f7f7f
            .isNew
              color white
              background-color #cbb693
              border-radius 5px
              padding 3px
        img
          width 100%
</style>
