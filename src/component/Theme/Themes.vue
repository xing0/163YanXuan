<template>
    <div class="wrap">
      <div class="content" v-for="(item,index) in shops":key="index">
        <Theme :shops="item"></Theme>
        <Space></Space>
      </div>
    </div>
</template>

<script>
  import {mapState} from 'vuex'
  import Theme from './items/Theme.vue'
  import Space from '../Space/Space.vue'
    export default {
        data() {
            return {}
        },
        methods: {},
        computed: {
          ...mapState({
            shops:state=>state.home.homeData.categoryModule || []
          })
        },
        components: {
          Theme,
          Space
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
