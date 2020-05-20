<template>
  <el-form :model="signupForm" status-icon :rules="rules" ref="signupForm">
    <el-form-item prop="username">
      <el-input placeholder="用户名" v-model="signupForm.username" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item prop="phonenumber">
      <el-input placeholder="电话号码" v-model="signupForm.phonenumber" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input placeholder="密码" v-model="signupForm.password" type="password" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item prop="checkPassword">
      <el-input
        placeholder="确认密码"
        v-model="signupForm.checkPassword"
        type="password"
        autocomplete="off"
      ></el-input>
    </el-form-item>
    <el-button type="success" round @click="handleSignup('signupForm')" style="width:100%">注册</el-button>
  </el-form>
</template>
<script>
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.signupForm.checkPassword !== "") {
          this.$refs.signupForm.validateField("checkPassword");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.signupForm.password) {
        callback(new Error("两次输入密码不一致!"));
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
    var validatePhonenumber = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入电话号码"));
      } else {
        callback();
      }
    };
    return {
      signupForm: {
        username: "",
        phonenumber: "",
        password: "",
        checkPassword: ""
      },
      rules: {
        username: [{ validator: validateUsername, trigger: "blur" }],
        password: [{ validator: validatePass, trigger: "blur" }],
        checkPassword: [{ validator: validatePass2, trigger: "blur" }],
        phonenumber: [{ validator: validatePhonenumber, trigger: "blur" }]
      }
    };
  },
  methods: {
    handleSignup(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$store.dispatch("user/signup", this.signupForm);
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>