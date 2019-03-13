<template>
    <div class="wrap">
      <div class="header">
        <span class="title">品牌制造商直供</span>
        <span class="more">更多></span>
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
</style>
