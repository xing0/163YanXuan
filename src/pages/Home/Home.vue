<template>
    <header>
      <Header></Header>
      <Banner :picList="bannerPicList"></Banner>
      <WangyiService></WangyiService>
      <HomeCategory></HomeCategory>
        <Space></Space>
      <NewUser></NewUser>
      <Space></Space>
      <Space></Space>
      <Space></Space>
      <Space></Space>
      <Space></Space>
      <Space></Space>
      <Space></Space>
      <Space></Space>
      <Space></Space>
      <Space></Space>
      <Space></Space>
      <Space></Space>
      <Space></Space>

    </header>
</template>

<script>
  import Header from '../../component/Header/Header_nav/Header_nav.vue'
  import Banner from '../../component/Banner/Banner'
  import WangyiService from '../../component/WangyiService/WangyiService.vue'
  import HomeCategory from '../../component/HomeCategory/HomeCategory.vue'
  import Space from '../../component/Space/Space.vue'
  import NewUser from '../../component/NewUser/NewUser.vue'
  import {mapGetters} from 'vuex'
    export default {
        data() {
            return {}
        },
        mounted(){
          this.$store.dispatch('setHomeDate')
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
          NewUser
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
 header
  font-family PingFangSC-Light,helvetica,'Heiti SC'
</style>
