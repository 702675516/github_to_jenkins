<template lang="pug">
.pipeline#pipeline
  .pipeline-top
    img(src="../../assets/images/230702_星魅网站页面-UPdate-05.png")
    .pipeline-top-info
      ul
        li RZL-012属于小分子创新药,直接注射
        li 到脂肪层,使脂肪逐渐消融
        li 颏下脂肪II期临床大数据显示,经过一次
        li 治疗,85%以上的人可达到明显颏下减
        li 脂效果。
  .pipeline-btm
    img(src="../../assets/images/230702_星魅网站页面-UPdate-06.png")
    .pipeline-btm-info
      ul
        li JS-002为特殊的靶向药物,在
        li 燃烧脂肪的同时,还可再塑你
        li 的身材......
    .pipeline-btm-box#footer
      ul
        li 星魅生物期待与业界同仁携手并进。若您希望参与产品的研
        li 发或投资,请联系我们!
        h1 美好的事业从这里开始
      ul
        h1 天津星魅生物科技有限公司
        li 天津自贸试验区(空港经济区)西五道35号汇津广场4号楼4层425号
        li 电话: 18902106557
        li email: inform@juvestar.com

</template>


<script>
</script>

<style scoped lang="scss">
.pipeline{
    width: 100%;
    background: white;

  &-top{
    position: relative;
    & > img{
      width: 100%;
    }
    &-info{
      position: absolute;
      font-size: 1.2vw;
      font-weight: 100;
      line-height: 32px;
      left: 23.5%;
      top: 19%;
      color: rgba(0, 0, 0, 0.75);
    }
  }

  &-btm{
    position: relative;
    & > img{
      width: 100%;
    }
    &-info{
      position: absolute;
      letter-spacing: 2px;
      font-size: 1.2vw;
      line-height: 32px;
      left: 23.5%;
      top: 26%;
      color: rgba(0, 0, 0, 0.75);
    }

    &-box{
      &>ul{
        line-height: 30px;
        position: absolute;
        font-size: 1.25vw;
        color: black;
      }

      & > ul:nth-child(1){
        left: 23.5%;
        top: 55%;
        & > h1{
          color: #b000b0;
        }
      }

      & > ul:nth-child(2){
        left: 23.5%;
        position: absolute;
        top: 76%;
        & > h1{
          color: #b000b0;
          font-size: 23px;
        }
      }
    }

  }
}
</style>