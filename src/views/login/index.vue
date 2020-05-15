<template>
  <div class="login-container">
    <el-card class="login-box" style>
      <el-image
        style="width: 100px; height: 100px"
        :src="require('@/assets/logo.png')"
        class="logo"
      ></el-image>
      <!-- <h1 class="title">旅意</h1> -->
      <el-tabs type="card" stretch>
        <el-tab-pane>
          <span slot="label">登录</span>
          <el-form :model="loginForm" status-icon :rules="rules" ref="loginForm">
            <el-form-item>
              <el-input placeholder="用户名" v-model="loginForm.username"></el-input>
            </el-form-item>
            <el-form-item>
              <el-input
                placeholder="密码"
                v-model="loginForm.password"
                type="password"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-button type="primary" round style="width:100%" @click.native.prevent="handleLogin">登录</el-button>
          </el-form>
        </el-tab-pane>
        <el-tab-pane>
          <span slot="label">注册</span>
          <el-form :model="registerForm" status-icon :rules="rules" ref="registerForm">
            <el-form-item>
              <el-input placeholder="用户名" v-model="registerForm.username" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input
                placeholder="密码"
                v-model="registerForm.password"
                type="password"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item prop="checkPassword">
              <el-input placeholder="确认密码" type="password" autocomplete="off"></el-input>
            </el-form-item>
            <el-button
              type="success"
              round
              @click="submitForm('registerForm')"
              style="width:100%"
            >注册</el-button>
          </el-form>
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>
<script>
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.registerForm.checkPassword !== "") {
          this.$refs.registerForm.validateField("checkPassword");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.registerForm.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      loginForm: {
        username: "",
        password: ""
      },
      registerForm: {
        username: "",
        password: "",
        checkPassword: ""
      },
      rules: {
        password: [{ validator: validatePass, trigger: "blur" }],
        checkPassword: [{ validator: validatePass2, trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          console.log("submit!!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    handleLogin() {
    this.$refs.loginForm.validate(valid => {
      if (valid) {
        this.$store.dispatch('user/login',this.loginForm).then(() => {
          this.$router.push({path:this.redirect || '/'})
        }).catch(() => {
          // this.loading = false;
        })
      } else {
        console.log('error submit!!');
        return false;
      }
    });
  }
  },
  
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