<template>
    <div class="wrap">
      <div class="button">
        <div>下载APP</div>
        <div>电脑版</div>
      </div>
      <div class="info">
        <p>网易公司版权所有 © 1997-2019</p>
        <p>食品经营许可证：JY13301080111719</p>
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
  .wrap
    height 244px
    bg(#414141)
    .button
      display flex
      justify-content space-around
      padding 45px 120px
      div
        width 172px
        height 62px
        border(1px,#999)
        color white
        text-align center
        font-size 24px
        line-height 62px
    .info
      p
        color #999
        font-size 24px
        line-height 32px
        text-align center

</style>
