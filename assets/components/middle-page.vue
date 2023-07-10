<template lang="pug">
.middle-page
  .middle-page-top
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
  .middle-page-btm
</template>




<script>
export default {
  data() {
    return {
    }
  }
}
</script>

<style scoped lang="scss">
.middle-page {
  width: 100%;
  height: 2400px;
  background: white;
  border: 1px solid red;

  &-top{
    height: 828px;
    background: url("assets/images/230702_星魅网站页面 UPdate-03.png");
    color: black;
    position: relative;

    &-title{
      font-size: 20px;
    }


  }

  &-box{
    left: 18%;
    top: 34.5%;
    position: absolute;
  }

  &-box-2{
    left: 51.8%;
    top: 34.5%;
    position: absolute;
  }

  &-box-3{
    left: 80.3%;
    top: 34.5%;
    position: absolute;
  }

  &-btm{
    height: 1579px;
    background: url("assets/images/230702_星魅网站页面 UPdate-04.png");
  }
}
</style>