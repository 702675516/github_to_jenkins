<template lang="pug">
.middle-page
  .middle-page-top
    img(src="../../assets/images/230702_星魅网站页面-UPdate-02.jpg")
    .middle-page-box
      h1.middle-page-top-title 34年医药行业经验
      ul
        li 临床药师(PUMC Hospital)
        li 药品注册(Ciba-Geigt/Novartis)
        li 市场和销售经理
        li (Hoechst,PPM,DERMIK/Aventis,ect.)
        li 药品研发&法务
        li (Quintile,PAREXEL,PPD,ICON,Syneos)
    .middle-page-box-2
      h1.middle-page-top-title 14年医药行业经验
      ul
        li 讲师(North China University)
        li 药品研发(SL Pharm)
        li 药品注册(Han Dian Pharm)
        li 临床医学(Xbiome,Micot,
        li Hongkong Purapharm)
    .middle-page-box-3
      h1.middle-page-top-title 15年投融资和政府事务经验
      ul
        li 拓展业务和投融资
        li 兼任复星集团天津副首代
  img(src="../../assets/images/230702_星魅网站页面-UPdate-04.png")
  .line#pipeline
</template>


<script>
export default {
  data() {
    return {}
  }
}
</script>

<style scoped lang="scss">

.line{
  position: absolute;
  height: 800px;
  width: 100%;
  left: 0;
  bottom: 0;
}
.middle-page {
  width: 100%;
  background: white;
  position: relative;

  & > img {
    width: 100%;
  }

  &-top {
    position: relative;
    color: black;

    & h1{
      height: 25px;
      font-size: 18px;
    }

    & > img {
      width: 100%;
      height: 100%;
    }

    &-title {
      font-size: 16px;
      margin: 0;
    }
  }

  &-box {
    left: 543px;
    top: 205px;
    position: absolute;
  }

  &-box-2 {
    left: 543px;
    top: 510px;
    position: absolute;
  }

  &-box-3 {
    left: 1015px;
    top: 510px;
    position: absolute;
  }
}

.middle-page-box {
  & > li {
    font-size: 12px;
  }
}
@media screen and (max-width: 1600px) and (min-width: 1024px) {

  .middle-page {
    &-box {
      left: 34%;
      top: 24.2%;
    }

    &-box-2 {
      left: 34%;
      top: 61.5%;
    }

    &-box-3 {
      left: 63.5%;
      top: 61.5%;
    }
  }
}


@media screen and (max-width: 1024px){
  .middle-page {
    &-box {
      left: 34%;
      top: 23%;

    }

    &-box-2 {
      left: 34%;
      top: 60%;
    }

    &-box-3 {
      left: 63.5%;
      top: 60%;
    }
  }
}
</style>