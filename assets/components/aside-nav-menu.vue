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
.aside-nav {
  position: fixed;
  transform: translate(0, -50%);
  z-index: 999;
  height: 100vh;
  width: 210px;
  top: 50%;
  color: black;

  &-logo {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &-list {
    text-align: center;
    font-size: 20px;
    height: 100%;
    font-weight: bolder;
    letter-spacing: 0.2rem;
    background-color: #E2E2E2;

    ul {
      padding: 80px 0;
    }

    li {
      display: flex;
      align-items: center;
      justify-content: center;

      & > a {
        transition: all .4s;

        &.active-link {
          color: palevioletred;
        }
      }

      & > a:hover {
        color: palevioletred;
      }
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
