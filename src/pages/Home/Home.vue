<template>
    <header>
      <Header :fixed="fixed"></Header>
      <Banner :picList="bannerPicList"></Banner>
      <WangyiService></WangyiService>
      <HomeCategory></HomeCategory>
        <Space></Space>
      <NewUser></NewUser>
        <Space></Space>
      <PinPaiZhiGong></PinPaiZhiGong>
      <Space></Space>
      <HotList></HotList>
      <Space></Space>
      <Limit></Limit>
      <Space></Space>
      <NewPro></NewPro>
      <Space></Space>
      <Shop4Mode></Shop4Mode>
      <Space></Space>
      <Theme></Theme>
      <HomeFooter></HomeFooter>
    </header>
</template>

<script>
  import Header from '../../component/Header/Header_nav/Header_nav.vue'
  import Banner from '../../component/Banner/Banner'
  import WangyiService from '../../component/WangyiService/WangyiService.vue'
  import HomeCategory from '../../component/HomeCategory/HomeCategory.vue'
  import PinPaiZhiGong from '../../component/PinPaiZhiGong/PinPaiZhiGong.vue'
  import Space from '../../component/Space/Space.vue'
  import NewUser from '../../component/NewUser/NewUser.vue'
  import HotList from '../../component/HotList/HotList.vue'
  import Limit from '../../component/Limit/Limit.vue'
  import NewPro from '../../component/NewPro/NewPro.vue'
  import Shop4Mode from '../../component/Shop4Mode/Shop4Mode.vue'
  import Theme from '../../component/Theme/Themes.vue'
  import HomeFooter from '../../component/HomeFooter/HomeFooter.vue'
  import {mapGetters} from 'vuex'
    export default {
        data() {
            return {
              fixed:0
            }
        },
        mounted(){
          this.$store.dispatch('setHomeDate')
          window.addEventListener('scroll',e=>{
            this.fixed = document.documentElement.scrollTop
          })
        },
        methods: {},
        computed: {
          ...mapGetters(['bannerPicList'])
        },
        components: {
          Header,
          Banner,
          WangyiService,
          HomeCategory,
          Space,
          NewUser,
          PinPaiZhiGong,
          HotList,
           Limit,
          NewPro,
          Shop4Mode,
          Theme,
          HomeFooter
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
 header
  font-family PingFangSC-Light,helvetica,'Heiti SC'
</style>
