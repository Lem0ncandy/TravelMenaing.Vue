<template>
  <el-form :model="loginForm" status-icon :rules="rules" ref="loginForm">
    <el-form-item prop="username">
      <el-input placeholder="用户名" v-model="loginForm.username"></el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input placeholder="密码" v-model="loginForm.password" type="password" autocomplete="off"></el-input>
    </el-form-item>
    <el-button type="primary" round style="width:100%" @click.native.prevent="handleLogin">登录</el-button>
  </el-form>
</template>
<script>
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };
    var validateUsername = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入用户名"));
      } else {
        callback();
      }
    };
    return {
      loginForm: {
        username: "",
        password: ""
      },
      rules: {
        username: [{ validator: validateUsername, trigger: "blur" }],
        password: [{ validator: validatePass, trigger: "blur" }],
      }
    };
  },
  methods: {
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.$store
            .dispatch("user/login", this.loginForm)
            .then(() => {
              this.$router.push({ path: this.redirect || "/" });
            })
            .catch(() => {
              // this.loading = false;
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>
<style scoped>
</style>