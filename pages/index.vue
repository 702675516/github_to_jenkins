<template>
  <div class="container">
<!--    <img src="@/assets/images/background.jpeg" alt="Background" class="background-image">-->
    <!-- 其他内容 -->
    <aside-nav-menu/>
    <HomePage/>
    <MiddlePage/>
    <MiddlePipeline/>
    <FooterPage/>
  </div>
</template>

<script>
import AsideNavMenu from "assets/components/aside-nav-menu.vue"
import HomePage from "assets/components/home-page.vue"
import MiddlePage from "assets/components/middle-page.vue"
import MiddlePipeline from "assets/components/middle-pipeline.vue"
import FooterPage from "assets/components/footer-page.vue"
  export default{
    components:{
      AsideNavMenu,HomePage,MiddlePage,MiddlePipeline,FooterPage
    },
    head: {
      title: 'New',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'SEO'
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'A, B'
        },
      ]
    }
  }
</script>

<style scoped lang="scss">

.container {
  position: relative;
  width: 1600px;
  margin: 0 auto;
}

.background-image {
  opacity: 0.3;
  display: block;
  width: 100%;
  height: auto;
  position: absolute;
  top:0 ;
  z-index: 1;
}
</style>
