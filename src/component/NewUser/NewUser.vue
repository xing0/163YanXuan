<template>
    <div>
      <p class="title">新人专享礼</p>
      <div class="left">
        <p>新人专享礼包</p>
      </div>
      <div class="top"></div>
      <div class="bottom"></div>
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
  div
    font-family PingFangSC-Medium
    font-size 32px
    height 528px
    padding 0 30px 20px
    &>div
      f1()
      box-sizing border-box
      padding 6px
      background-clip content-box !important
    .title
      text-align center
      margin 24px
    .title:after,.title:before
      content ''
      display inline-block
      width 24px
      height 3px
      background-color black
      vertical-align middle
      margin 0 20px

    .left
      width 50%
      height 434px
      border(1px,red)
      background #f9e9cf url("./images/10yuan.png") no-repeat   center
      p
        margin 30px
        clearF()
    .top,.bottom
      height 217px
      width 50%
      border(1px)
</style>
