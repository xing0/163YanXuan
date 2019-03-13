<template>
  <!--//新品首发-->
  <div class="wrap">
      <div class="header">
        <span class="title">限时购 </span>
         <span class="more">更多></span>
      </div>

    <div class="content">
      <ul>
        <li v-for="(item,index) in newList" :key="index" v-if="index<6">
          <div v-if="item.colorNum>1" class="colorNum">{{item.colorNum}}色可选</div>
          <img :src="item.listPicUrl" :alt="item.simpleDesc">
          <p>{{handleTitle(item.name)}} <span class="price" >¥{{item.retailPrice}}</span></p>
          <p class="discount" v-if="getClass(item)" :class="getClass(item)">{{getClass(item)&&item.itemTagList[item.itemTagList.length-1].name}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
    export default {
        data() {
            return {}
        },
        methods: {
          getClass(item){
           if(item.itemTagList.length ===0) return 0;
             // const type = item.isCouponConflict ? item.itemTagList[1].type : item.itemTagList[0].type
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
          }
        },
        computed: {
          ...mapState({
            newList:state => state.home.homeData.newItemList
          })
        },
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
  .content
    padding 0 28px 20px
    ul
      display flex
      flex-wrap wrap
      justify-content space-around
      align-content space-between
      /*height 580px*/
      li
        width 216px
        height 335px
        text-align left
        font-size 24px
        position relative
        height 350px
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


</style>
