<template lang="pug">
.container
  aside-nav-menu
  HomePage
  MiddlePage
  MiddlePipeline
</template>

<script>
import AsideNavMenu from "assets/components/aside-nav-menu.vue"
import HomePage from "assets/components/home-page.vue"
import MiddlePage from "assets/components/middle-page.vue"
import MiddlePipeline from "assets/components/middle-pipeline.vue"
  export default{
    components:{
      AsideNavMenu,HomePage,MiddlePage,MiddlePipeline
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
  min-width: 1000px;
  width: 100%;
  max-width: 1600px;
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
@media screen and (max-width: 1600px) and (min-width: 1024px) {
  .container {
    width: 100%;
    margin: 0 auto;

  }
}
</style>
