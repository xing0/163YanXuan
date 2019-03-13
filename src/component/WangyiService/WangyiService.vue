<template>
    <div class = 'serContent'>
      <span v-for="(item,index) in serviceList" :key="index">
        <img :src="item.icon" alt="">
        {{item.desc}}
      </span>
    </div>
</template>

<script>
  import {mapState} from 'vuex'
    export default {
        data() {
            return {}
        },
      mounted(){
      },
        methods: {},
        computed: {
          serviceList(){
            return this.$store.state.home.homeData.policyDescList || []
          }
        },
        components: {}
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../mix/mix.styl"
.serContent
  display flex
  justify-content space-around
  height 72px
  align-items center
  span
    color #B4282D
    font-size 20px
    vertical-align middle

    img
      width 32px
      vertical-align middle

</style>
