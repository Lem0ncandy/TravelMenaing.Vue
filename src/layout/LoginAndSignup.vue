<template>
  <div class="login-container">
    <el-card class="login-box" style>
      <el-image
        style="width: 100px; height: 100px"
        :src="require('@/assets/logo.png')"
        class="logo"
      ></el-image>
      <el-tabs type="card" stretch @tab-click="handleClickTab" v-model="activeName">
        <el-tab-pane name="login">
          <span slot="label">登录</span>
        </el-tab-pane>
        <el-tab-pane name="signup">
          <span slot="label">注册</span>
        </el-tab-pane>
        <router-view />
      </el-tabs>
    </el-card>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return{
      activeName:this.$route.name.toLocaleLowerCase(),
    }
  },
  methods: {
    handleClickTab(tab, event) {
      switch (tab.$props.name) {
        case "login":
          this.$router.push({name:'Login'});
          break;
        case "signup":
          this.$router.push({name:'Signup'});
          break;
        default:
          break;
      }
    }
  }
};
</script>
<style>
.login-container {
  height: 100%;
  background: #bdf0e3;
  overflow: hidden;
}
.login-box {
  margin: 200px auto;
  width: 500px;
  max-width: 100%;
  /* padding: 10px 20px; */
  background-color: #f4f4f5;
  border-color: #f5f7fa;
  border-radius: 5px;
}
.el-tabs__header {
  background-color: #ffffff;
  /* border-bottom: 1px solid #E4E7ED;
    margin: 0; */
}
.el-tabs--card > .el-tabs__header .el-tabs__item.is-active {
  background: #e9e9eb;
  border-bottom-color: #e9e9eb;
}
.el-tabs.el-tabs--card.el-tabs--top {
  margin: 30px auto;
}
.title {
  color: #24cea0;
  margin: 30px auto;
  letter-spacing: 10px;
  text-align: center;
}
.logo {
  margin: 3px auto;
  display: block;
}
</style>