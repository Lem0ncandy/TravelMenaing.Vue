<template>
  <el-container>
    <el-header class="borderline headerposition">
      <navbar></navbar>
    </el-header>
    <el-main>
      <app-main></app-main>
    </el-main>
  </el-container>
</template>

<script>
import { Navbar, AppMain } from "./components";
export default {
  name: "Layout",
  components: {
    Navbar,
    AppMain,
    
  }
};
</script>
<style scoped>
.el-main{
  margin-top: 60px;
}
</style>
<style>
/* body > .el-container {
    margin-bottom: 40px;
  } */
.borderline {
  border-style: solid;
  border-width: 1px 0 1px 0;
  border-color: #f0f0f0;
}
.headerposition {
  position: fixed;
  right: 0;
  left: 0;
  z-index: 1030;
  background: #ffffff;
}

</style>