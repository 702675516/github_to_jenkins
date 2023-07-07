<template>
  <div class="container">
    <img src="@/assets/images/background.jpeg" alt="Background" class="background-image">
    <!-- 其他内容 -->
    <aside-nav-menu/>
    <HomePage/>
    <MiddlePage/>
    <MiddleDoublePage/>
    <FooterPage/>
    
  </div>
</template>

<script>
import AsideNavMenu from "@/layouts/aside-nav-menu.vue"
import HomePage from "@/layouts/home-page.vue"
import MiddlePage from "@/layouts/middle-page.vue"
import MiddleDoublePage from "@/layouts/middle-double-page.vue"
import FooterPage from "@/layouts/footer-page.vue"

  export default{
    components:{
      AsideNavMenu,HomePage,MiddlePage,MiddleDoublePage,FooterPage
    }
  }
</script>

<style scoped lang="scss">
.container {
  position: relative;
  width: 1600px;
  margin: 0 auto;
  border: 1px solid black;
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
