<template>
  <el-form ref="form" :model="form" label-width="80px">
    <el-form-item label="用户名">
      <el-input v-model="form.username"></el-input>
    </el-form-item>
    <el-form-item label="地址">
      <el-input v-model="form.location"></el-input>
    </el-form-item>
    <el-form-item label="职业">
      <el-input v-model="form.occupation"></el-input>
    </el-form-item>
    <el-form-item label="电话号码">
      <el-input v-model="form.phoneNumber"></el-input>
    </el-form-item>
    <el-form-item label="性别">
      <el-select v-model="form.region" placeholder="请选择活动区域">
        <el-option label="男" :value="2"></el-option>
        <el-option label="女" :value="1"></el-option>
        <el-option label="保密" :value="0"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="出生日期">
      <el-col :span="11">
        <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
      </el-col>
      <el-col class="line" :span="2">-</el-col>
      <el-col :span="11">
        <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
      </el-col>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="handleSubmit">立即创建</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
import {modifyUserInfo} from '@/api/user.js'
export default {
  data() {
    return {
      form: {
        username: "",
        location: "",
        occupation: "",
        phoneNumber: "",
        region: "",
        date1: "",
        date2: "",
      }
    };
  },
  methods: {
    modifyUserInfo(data){
        modifyUserInfo(data).then(response =>{
            console.log(response.data.isSucess);
        });
    },
    handleSubmit() {
      this.modifyUserInfo(this.form);
    }
  }
};
</script>
