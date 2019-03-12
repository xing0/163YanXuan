<template>
    <div>
      <ul ref="ul">
        <li v-for="(item,index) in homeCate.kingKongList" :key="index">
          <img :src="item.picUrl" >
          <p>{{item.text}}</p>
        </li>
      </ul>
    </div>
</template>

<script>
  import {mapState} from 'vuex'
    export default {
        data() {
            return {}
        },
        methods: {},
      mounted(){
        this.$refs.ul.style.background = `url(${this.homeCate.background})`
      },
        computed: {
          ...mapState({
            homeCate:state=>state.home.homeData.kingKongModule||{}
            //kingKongList
          })
        },
        components: {}
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  div
    ul
      display flex
      flex-wrap wrap
      justify-content space-around
      li
        margin 0 12px 24px
        text-align center
        img
          width 110px
</style>
