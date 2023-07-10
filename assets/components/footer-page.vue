<template lang="pug">
footer.footer#footer
  .footer-header
    .footer-header-top
      ul
        li 星魅生物期待与业界同仁携手并进。若您希望参与产品的研
        li 发或投资,请联系我们!
      h1.footer-header-top-title 美好的事业从这里开始
    .footer-header-btm
      ul
        li.footer-header-btm-title 天津星魅生物科技有限公司
        li 天津自贸试验区(空港经济区)西五道35号汇津广场4号楼4层425号
        li 电话: 18902106557
        li email: inform@juvestar.com
      .footer-header-img
  .footer-bottom
    img
    .footer-right
      p 天津星魅生物科技有限公司
      p Tianjin JuveStar Blotech Co.,Ltd.
</template>


<script>
</script>

<style scoped lang="scss">
.footer {
  height: 760px;
  background: white;
  width: 100%;

  &-header {
    color: black;
    height: 610px;
    padding: 20px 400px;
    position: relative;

    &-top {
      margin-top: 125px;

      &-title{
        color: #b000b0;
      }

      li {
        font-size: 23px;
        margin-bottom: 20px;
      }

      h1 {
        font-size: 32px;
        margin-top: 35px;
      }
    }

    &-btm {
      margin-top: 155px;
      &-title{
        color: #b000b0;
      }
      li {
        margin-bottom: 10px;
        font-size: 20px;
      }
    }

    &-img {
      position: absolute;
      transform: translate(-50%, -50%);
      right: 0;
      top: 75%;
      height: 195px;
      width: 210px;
      background: url("assets/images/230702_星魅网站页面 UPdate-07.png");

    }
  }

  &-bottom {
    height: 110px;
    background-color: green;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 100px;
    font-size: 16px;

    p {
      margin: 0;
    }

    p:nth-child(2) {
      font-size: 13px;
    }
  }

}
</style>