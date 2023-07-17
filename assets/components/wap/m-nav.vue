<script setup>
const navList = ref([
  {list: "公司简介", md: 'home-m'},
  {list: "研发管线", md: 'pipeline-m'},
  {list: "联系方式", md: 'footer-m'},
]);
const activeItem = ref(navList.value[0]);
let offsetTops = [];

onMounted(() => {

  if (window.innerWidth > 855){
    return
  }
  offsetTops = navList.value.map(nav => {
    const element = document.querySelector(`#${nav.md}`);
    return element ? element.offsetParent.offsetTop : 0;
  });
  const handleScroll = function () {
    for (let i = offsetTops.length - 1; i >= 0; i--) {
      if (this.scrollTop >= offsetTops[i]) {
        activeItem.value = navList.value[i];
        break;
      }
    }
  };

  document.querySelector('.m-main').addEventListener('scroll', handleScroll);
});
</script>

<template lang="pug">
nav.aside-nav-m
  img(src="../../images/wap/230702_星魅网站页面-UPdate-05.jpg")
  .aside-nav-m-list
    ul
      li(v-for="(item,index) in navList" :key="index")
        a(:href="`#${item.md}`" :class="{'m-active-link': activeItem.md === item.md}") {{item.list}}
</template>

<style scoped lang="scss">
@import "assets/css/wap/m-nav";
</style>