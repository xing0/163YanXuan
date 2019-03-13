<template>
    <div class="wrap">
      <div class="content">
        <ul>
          <li v-for="(item,index) in shops" :key="index">
            <div class="info">
              <p class="name">{{item.styleItem.title}}</p>
              <p class="price">{{item.styleItem.desc}}</p>
            </div>
            <div class="images" >
              <img class="shop"
                   v-for="(img,index) in item.styleItem.picUrlList"
                   :key="index"
                   :src="img"
                   :alt="item.styleItem.title">
            </div>
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
            shops:state=>state.home.homeData.sceneLightShoppingGuideModule
          })
        },
        components: {}
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../mix/mix.styl"
  .content
    ul
      display flex
      justify-content space-around
      flex-wrap wrap
      padding 20px 26px 30px
      height 553px
      li
        position relative
        width 343px
        height: 268px
        bg(#f5f5f5)
        .info
          position absolute
          top 10px
          left 1em
          /*margin-top 30px*/
          font-size 32px
          width max-content
          text-align left
          .price
            font-size 24px
            color #7f7f7f
        .images
          position absolute
          bottom 5px
          text-align center
          display flex
          width 100%
          justify-content space-around
          .shop
            width 150px
            height 150px

</style>
