<script>

export default {
  components: {

  }
}
</script>

<template lang="pug">
.homePage#home
  img(src="../../assets/images/230702_星魅网站页面-UPdate-02.png")
  .homePage-info
    ul
      li 天津星魅生物科技有限公司由复星医药旗下的复健资本和天津港
      li 保税区共同创立,利用产业基金和项目孵化的模式,致力于医美和
      li 抗衰老等产品,为天津医美界创新注入了新的驱动。
    ul
      li 我们追逐世界前沿技术,为求美者提供最佳的减脂、增肌、塑性、抗
      li 衰的方案,创造健康美丽生活。我们秉持诚信、安全和负责的态度，
      li 为客户提供可靠的优质产品。


</template>

<style scoped lang="scss">
@import 'assets/main';

.homePage{
    width: 100%;
    position: relative;
  & > img{
    width: 100%;
  }

  &-info{
    position: absolute;
    font-size: 19px;
    font-weight: bolder;
    top: 520px;
    left: 360px;


    ul:nth-child(1){
      margin-bottom: 40px;
    }
  }
}

@media screen and (max-width: 1600px) and (min-width: 1024px) {

  .homePage {

    &-info {
      font-size: 1.2vw;
      top: 28%;
      left: 22.5%;
    }
  }
}

@media screen and (max-width: 1024px) {

  .homePage {

    &-info {
      font-size: 1.2vw;
      top: 28%;
      left: 22.5%;
    }
  }
}
</style>
