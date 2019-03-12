<template>
    <div class="Top">
        <div class="cha"></div>
        <div class="logo"></div>
        <div class="content">
          <p>前往APP领1000元新用户现金礼包</p>
          <p>网易自营 品质生活</p>
        </div>
        <div class="button">
         <span>打开APP</span>
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
@import "../../../mix/mix.styl"
.Top
  width 100%
  bg(#333)
  clearF()
  height 104px
  padding 16px 26px
  box-sizing border-box
  position relative
  z-index 10
  .cha
    width 38px
    height 38px
    f1()
    background url("../images/header.png") 0px -190px/172px 420px
    position absolute
    left 0px
    top 0px
  .logo
    width 72px
    height 72px
    f1()
    background url("../images/header.png") 0px 148px/172px 420px
  .content
    padding-top 5px
    f1()
    p
      color white
      margin 0 10px
  .button
    width 138px
    height 52px
    bg(#b4282d)
    color white
    f2()
    text-align center
    margin-top 1.5%
    border-radius  8px
    span
      line-height 52px

</style>
