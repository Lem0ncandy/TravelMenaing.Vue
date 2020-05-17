<template>
  <el-form :model="registerForm" status-icon :rules="rules" ref="registerForm">
    <el-form-item>
      <el-input placeholder="用户名" v-model="registerForm.username" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input placeholder="密码" v-model="registerForm.password" type="password" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item prop="checkPassword">
      <el-input placeholder="确认密码" type="password" autocomplete="off"></el-input>
    </el-form-item>
    <el-button type="success" round @click="submitForm('registerForm')" style="width:100%">注册</el-button>
  </el-form>
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
    }
  }
};
</script>