<template lang="pug">
.container
  Head
    Meta(name="description" content="星魅生物、美丽、科学、健康、技术团队、全新减脂解决方案、溶脂针、去除多余脂肪、靶向药物、再塑身材")
    Meta(name="keywords" content="星魅生物、美丽、科学、健康、技术团队、减脂、溶脂针、去除脂肪、再塑身材、减肥")
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
