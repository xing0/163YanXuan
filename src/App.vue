<template>
    <div class="app">
      <router-view></router-view>
      <Footer/>
    </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import Footer from './component/Footer/Footer.vue'
    export default {
        data() {
            return {}
        },
      mounted(){
        // new BScroll('.app',{
        //   click:true
        // })
      },
        methods: {},
        computed: {},
        components: {
          Footer,
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.app
  padding-bottom 98px
</style>
