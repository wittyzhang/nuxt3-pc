<template>
  <div class="page-header">
    <div class="header-box">
      <div class='logo'>
        <img src="../public/favicon.ico" width="40" height="40" alt="" />
        <span class="text">logo</span>
      </div>
      <the-menu />
    </div>
  </div>
  <div style="height: 80px;"></div>
  <slot />
  <div class="page-footer">
    <the-footer />
  </div>
</template>
<style scoped lang="scss">
.page-header{
  background: $mainColor;
  height: 80px;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 100;
}
.header-box{
  display: flex;
  justify-content: space-around;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}
.logo{
  display: flex;
  align-items: center;
  .text{
    color: $logoTextColor;
    padding-left: 10px;
  }
}
.page-footer{
  height: 60px;
  background: $footBgColor;
  line-height: 60px;
  text-align: center;
}
</style>