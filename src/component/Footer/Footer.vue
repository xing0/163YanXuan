<template>
    <Footer>
      <router-link to="/home">
        <i class="iconfont icon-home"></i>
        <p>首页</p>
      </router-link>
      <router-link to="/category">
        <i class="iconfont icon-sanmenyigui"></i>
        <p>分类</p>
      </router-link>
      <router-link to="/home">
        <i class="iconfont icon-tupian"></i>
        <p>识图</p>
      </router-link>
      <router-link to="/home">
        <i class="iconfont icon-gouwuchekong"></i>
        <p>购物车</p>
      </router-link>
      <router-link to="/home">
        <i class="iconfont icon-geren"></i>
        <p>个人</p>
      </router-link>
    </Footer>
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
  Footer
    width 750px
    display flex
    justify-content space-around
    position fixed
    bottom 0
    text-align center
    background-color white
    height 98px
    align-items center
    i
      font-size 40px
      color #7f7f7f
    p
      color #7f7f7f
    .router-link-active i,.router-link-active p
      color #b4282d



</style>
