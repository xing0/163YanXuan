<template>
    <div class="wrap">
      <div class="banner">
        <img :src="shops.titlePicUrl" :alt="shops.extra.materialName">
      </div>
      <div class="content" ref="BS">
        <ul>
          <li v-for="(item,index) in shops.itemList" :key="index">
            <div v-if="item.colorNum>1" class="colorNum">{{item.colorNum}}色可选</div>
            <img :src="item.listPicUrl" :alt="item.simpleDesc">
            <p>{{handleTitle(item.name)}} <span class="price" >¥{{item.retailPrice}}</span></p>
            <p class="discount" v-if="getClass(item)" :class="getClass(item)">{{getClass(item)&&item.itemTagList[item.itemTagList.length-1].name}}</p>
          </li>
          <li class="more">
            <p>
            查看更多>
            </p>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
  import BScroll from 'better-scroll'
    export default {
    props:{
      shops:Object
    },
      mounted(){
        this.$nextTick(()=>{
          this.BS =  new BScroll(this.$refs.BS,{
            scrollX:true,
            click:true,
            eventPassthrough:'vertical'
          })
        })
      },
        data() {
            return {}
        },
        methods: { getClass(item){
            if(item.itemTagList.length ===0) return 0;
            const type = item.itemTagList[item.itemTagList.length-1].type
            let className = ''
            switch (type) {
              case 5:
                className = 'quan'
                break
              case 2:
                className = 'tejia'
                break
              case 1:
                className = ''
                break
              default:
                className = ''
            }
            return className
          },
          handleTitle(str){
            if(str.length<=12){
              return str
            }else{
              return str.substring(0,12)+'...'
            }
          }},
        computed: {},
        components: {},

    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import "../../../mix/mix.styl"
.wrap
   .banner
    img
      width 100%
      margin-bottom 10px
  .content
    padding 0  10px 28px 0px
    overflow hidden
    ul
      display flex
      /*flex-wrap wrap*/
      justify-content space-around
      align-content space-between
      /*height 580px*/
      width max-content
      li
        width 216px
        text-align left
        font-size 24px
        position relative
        height 350px
        margin-left 20px
        .colorNum
          bg(#F4F4F7)
          color #b4a078
          position absolute
          top:8px
          left: 8px
          border(1px,#b4a078)
          width 32px
          height 105px
          font-size 20px
          line-height 21px
          text-align center
          padding 8px 3px
          box-sizing border-box
        img
          width 216px
          bg(#f5f5f5)
          margin-bottom 10px
        .price
          color red
        /*font-size 28px*/
        .discount
          display inline-block
          color red
          font-size 20px
          &.quan
            background url("./images/quan.png") no-repeat
            background-size 100% 100%
            line-height 16.5px
            padding 5px 10px
            margin-bottom  10px
          &.tejia
            border(1px,red)
            margin 6px
            padding 0 9px


      .more
        width 216px
        height 216px
        bg(#f5f5f5)
        p
          line-height 216px
          text-align center

</style>
