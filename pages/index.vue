<template lang="pug">
.container
  aside-nav-menu
  home-page
  middle-page
  middle-pipeline
</template>

<script>
import AsideNavMenu from "assets/components/aside-nav-menu.vue"
import HomePage from "assets/components/home-page.vue"
import MiddlePage from "assets/components/middle-page.vue"
import MiddlePipeline from "assets/components/middle-pipeline.vue"
  export default{
    components:{
      AsideNavMenu,HomePage,MiddlePage,MiddlePipeline
    }
  }
</script>

<style scoped lang="scss">
@import "assets/css/index";
</style>
