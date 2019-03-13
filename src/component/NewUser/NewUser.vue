<template>
    <div class="newwrap">
      <p class="title">新人专享礼</p>
      <div  class="warp">

      <div class="left">
        <p class="title1">新人专享礼包</p>
        <div class="cssgif"></div>
      </div>
      <div class="top">
        <div class="priceBox">
          <p class="price">¥66.3</p>
          <p class="oldPrice">¥99</p>
        </div>
        <p class="title1">福利社</p>
        <p class="title2">今日特价</p>

      </div>
      <div class="bottom">
        <div class="priceBox">
          <p class="price">¥1</p>
          <p class="oldPrice">¥29</p>
        </div>
        <p class="title1">新人拼团</p>
        <p class="huodong">1元起包邮</p>

      </div>
      </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {}
        },
        methods: {},
        computed: {},
        components: {}
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../mix/mix.styl"
  .newwrap
    font-family PingFangSC-Medium
    font-size 32px
    height 510px
    padding 0 30px 20px
    .warp
      display flex
      flex-wrap wrap
      flex-direction column
      height 434px
      padding 0
      justify-content space-between

    &>div
      flex-shrink 0
      //f1()
      box-sizing border-box
      /*margin 3px 3px*/
      /*background-clip content-box !important*/
    .title
      text-align center
      margin 24px
    .title2
      color #7F7F7F
      font-size 24px
      margin 0 30px
    .title:after,.title:before
      content ''
      display inline-block
      width 24px
      height 3px
      background-color black
      vertical-align middle
      margin 0 20px
    .title1
      margin 30px 30px 0px
      clearF()
    .huodong
      color white
      background-color #CBB693
      font-size 24px
      margin 0 30px
      display inline-block
      padding 0.2em
      border-radius 6px

    .left
      position relative
      width 49%
      /*height 434px*/
      height 100%
      background #f9e9cf url("./images/10yuan.png") no-repeat  47px 120px
      .cssgif
        width 30px
        height 20px
        background url("./images/gifrightpng.png") no-repeat
        position absolute
        top 338px
        left 211px
        animation rightin linear 1s infinite
        @keyframes rightin
          0%
            background-image  url("./images/gifrightpng.png")
          50%
            background-image  url("./images/gifrightpng2.png")
          100%
            background-image  url("./images/gifrightpng3.png")


    .top,.bottom
      position relative
      height 215px
      width 49%
      bg(#fbe2d3)
      align-self start
      padding 0
      background #fbe2d3 url("./images/xiezi.png") no-repeat  135px 20px
      .priceBox
        position absolute
        right 30px
        top 15px
        background rgba(245,149,36,.8)
        border-radius 50%
        width 80px
        height 70px
        padding-top 15px
        opacity .8
        color white
        font-size 24px
        text-align center
        font-family PingFangSC-Light, helvetica, 'Heiti SC'
        .oldPrice
          font-size 20px
          text-decoration: line-through
    .bottom
      bg(#ffecc2)
      background #f9e9cf url("./images/shanzhatiao.png") no-repeat  135px 20px

</style>
