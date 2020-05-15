<template>
  <div class="center">
    <img src="@/icons/nav-logo.png" class="navbaricon" />
    <el-row class="btn-ground">
      <el-button type="success">成功按钮</el-button>
      <el-button round>登录</el-button>
      <el-button type="primary" round>注册</el-button>
    </el-row>
    <div class="container">
      <el-menu mode="horizontal" text-color="#000000" active-text-color="#169757">
        <el-menu-item index="1">首页</el-menu-item>
        <el-menu-item index="2">发现 & 精选</el-menu-item>
        <el-menu-item index="3">分类</el-menu-item>
      </el-menu>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.center {
  min-width: 768px;
  max-width: 1440px;
  margin: 0 auto;
}
.btn-ground {
  margin-top: 5px;
  float: right;
  z-index: 2;
}
.navbaricon {
  width: 80px;
  margin-top: 10px;
  float: left;
}
.el-menu--horizontal.el-menu {
  border-style: none;
  border-width: 0px;
}
.el-menu--horizontal>.el-menu-item{
  height: 58px;
}
</style>