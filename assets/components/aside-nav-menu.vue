<script setup>
const navList = ref([
  { list: "公司简介",md: 'home' },
  { list: "研发管线",md: 'pipeline' },
  { list: "联系方式",md: 'footer' },
]);
</script>

<template lang="pug">
nav.aside-nav
  .aside-nav-logo
    span logo
  .aside-nav-list
    ul
      li(v-for="item in navList" :key="item") 
        a(:href="`#${item.md}`") {{item.list}}
      
</template>

<style scoped lang="scss">
.aside-nav {
  position: fixed;
  z-index: 999;
  height: 100vh;
  width: 210px;
  top: 50%;
  transform: translate(0, -50%);
  color: black;

  &-logo {
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: palevioletred;
  }

  &-list {
    text-align: center;
    font-size: 20px;
    height: 100%;
    font-weight: bolder;
    letter-spacing: 0.2rem;
    background-color: oldlace;

    ul {
      padding: 80px 0;
    }

    li {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    li:not(:last-child) {
      margin-bottom: 95px;
    }

    li:hover {
      cursor: pointer;
      color: purple;
    }
  }
}
</style>
