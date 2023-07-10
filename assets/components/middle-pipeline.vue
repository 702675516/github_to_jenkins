<template lang="pug">
.pipeline#pipeline
  .pipeline-top
    .pipeline-top-info
      ul
        li RZL-012属于小分子创新药,直接注射
        li 到脂肪层,使脂肪逐渐消融
        li 颏下脂肪II期临床大数据显示,经过一次
        li 治疗,85%以上的人可达到明显颏下减
        li 脂效果。
  .pipeline-btm
    .pipeline-btm-info
      ul
        li JS-002为特殊的靶向药物,在
        li 燃烧脂肪的同时,还可再塑你
        li 的身材......
</template>


<script>
</script>

<style scoped lang="scss">
.pipeline{
    width: 100%;
    height: 2560px;
    background: white;
    border: 1px solid green;

  &-top{
    background: url("assets/images/230702_星魅网站页面 UPdate-05.png");
    height: 1860px;
    position: relative;

    &-info{
      position: absolute;
      font-size: 20px;
      font-weight: 100;
      line-height: 32px;
      left: 23.5%;
      top: 20%;
      color: rgba(0, 0, 0, 0.75);
    }
  }

  &-btm{
    background: url("assets/images/230702_星魅网站页面 UPdate-06.png");
    height: 1455px;
    position: relative;
    &-info{
      position: absolute;
      letter-spacing: 2px;
      font-size: 23.5px;
      font-weight: 100;
      line-height: 32px;
      left: 23.5%;
      top: 27%;
      color: rgba(0, 0, 0, 0.75);
    }
  }
}
</style>