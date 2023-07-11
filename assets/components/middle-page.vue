<template lang="pug">
.middle-page
  .middle-page-top
    img(src="../../assets/images/230702_星魅网站页面-UPdate-03.png")
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
</template>


<script>
export default {
  data() {
    return {}
  }
}
</script>

<style scoped lang="scss">
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

    & > img {
      width: 100%;
    }


    &-title {
      font-size: 16px;
    }
  }

  &-box {
    left: 290px;
    top: 290px;
    position: absolute;
    & > ul {
      margin-top: 15px;
    }
  }

  &-box-2 {
    left: 830px;
    top: 290px;
    position: absolute;
    & > ul {
      margin-top: 15px;
    }
  }

  &-box-3 {
    left: 1280px;
    top: 290px;
    position: absolute;

    & > ul {
      margin-top: 15px;
    }
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
      left: 18%;
      top: 33%;
    }

    &-box-2 {
      left: 52%;
      top: 33%;
    }

    &-box-3 {
      left: 80%;
      top: 33%;
    }
  }
}

@media screen and (max-width: 1024px){
 .middle-page {
   &-box {
     left: 18%;
     top: 33%;
   }

   &-box-2 {
     left: 52%;
     top: 33%;
   }

   &-box-3 {
     left: 80%;
     top: 33%;
   }
 }
}
</style>