<template>
    <div>
      Topic
    </div>
</template>

<script>
    export default {
        data() {
            return {}
        },
        mounted(){
          this.$store.dispatch('getTabs')
          this.$store.dispatch('getPages')
        },
        methods: {},
        computed: {},
        components: {}
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
