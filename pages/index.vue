<template lang="pug">
.container
  aside-nav-menu
  m-nav
  .main
    home-page
    middle-page
    middle-pipeline
  .m-main
    m-home-page
    m-middle-page
    m-midle-pipeline
</template>

<script>
import AsideNavMenu from "assets/components/aside-nav-menu.vue"
import HomePage from "assets/components/home-page.vue"
import MiddlePage from "assets/components/middle-page.vue"
import MiddlePipeline from "assets/components/middle-pipeline.vue"

import MHomePage from "assets/components/wap/m-home-page.vue"
import MNav from "assets/components/wap/m-nav.vue"
import MMiddlePage from "assets/components/wap/m-middle-page.vue"
import MMidlePipeline from "assets/components/wap/m-middle-pipeline.vue"
  export default{
    components:{
      AsideNavMenu,HomePage,MiddlePage,MiddlePipeline,
      MNav,MHomePage,MMiddlePage,MMidlePipeline
    }
  }
</script>

<style scoped lang="scss">
@import "assets/css/index";
</style>
