<template>
    <div>
       <div class="swiper-container">
         <div class="swiper-wrapper">
           <div class="swiper-slide" v-for="(pic,index) in picList" :key="index">
             <img :src="pic">
           </div>

         </div>
         <!-- 如果需要分页器 -->
         <div class="swiper-pagination"></div>

         <!-- 如果需要导航按钮 -->
         <!--<div class="swiper-button-prev"></div>-->
         <!--<div class="swiper-button-next"></div>-->

         <!-- 如果需要滚动条 -->
         <!--<div class="swiper-scrollbar"></div>-->
       </div>
    </div>
</template>

<script>
    export default {
        props:{
          picList:Array
        },
        data() {
            return {}
        },
        mounted(){

        },
        methods: {},
        computed: {},
        components: {},
        watch:{
          picList(){
              this.$nextTick(()=>{
                this.swiper = new Swiper ('.swiper-container', {
                  // direction: 'vertical', // 垂直切换选项
                  loop: true, // 循环模式选项
                  // 如果需要分页器
                  pagination: {
                    el: '.swiper-pagination',
                  },
                  // 如果需要前进后退按钮
                  // navigation: {
                  //   nextEl: '.swiper-button-next',
                  //   prevEl: '.swiper-button-prev',
                  // },
                  // 如果需要滚动条
                  scrollbar: {
                    el: '.swiper-scrollbar',
                  },
                })
              })
          }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" >
  @import "../../mix/mix.styl"
.swiper-container
  .swiper-slide
    img
      width 100%
  .swiper-pagination
    .swiper-pagination-bullet
      bg(#fff)
      opacity .4
      width 40px
      height 4px
      &.swiper-pagination-bullet-active
        opacity 1
</style>
