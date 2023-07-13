<template lang="pug">
nav.aside-nav
  .aside-nav-logo
    img(src="../images/230702_星魅网站页面-UPdate-07.png")
  .aside-nav-list
    ul
      li(v-for="(item,index) in navList" :key="index")
        a(:href="`#${item.md}`" :class="{'active-link': activeItem.md === item.md}") {{item.list}}
</template>

<script setup>
const navList = ref([
  {list: "公司简介", md: 'home'},
  {list: "研发管线", md: 'pipeline'},
  {list: "联系方式", md: 'footer'},
]);
const activeItem = ref(navList.value[0]);
let offsetTops = [];

onMounted(() => {
  offsetTops = navList.value.map(nav => document.querySelector(`#${nav.md}`).offsetParent.offsetTop);
  const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop;

    for (let i = offsetTops.length - 1; i >= 0; i--) {
      if (scrollTop >= offsetTops[i]) {
        activeItem.value = navList.value[i];
        break;
      }
    }
  };

  window.addEventListener('scroll', handleScroll);
});
</script>


<style scoped lang="scss">
@import "assets/css/aside-nav-menu";
</style>
