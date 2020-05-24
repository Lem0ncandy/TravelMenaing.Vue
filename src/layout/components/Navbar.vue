<template>
  <div class="center">
    <router-link :to="namedRoutes('Index')">
      <img src="@/icons/nav-logo.png" class="navbar-icon" />
    </router-link>
    <el-row class="btn-ground">
      <router-link :to="namedRoutes('Editor')" target="_blank">
        <el-button type="success">发布指南</el-button>
      </router-link>
      <router-link :to="namedRoutes('Login')">
        <el-button round v-if="!isLogin">登录</el-button>
      </router-link>
      <router-link :to="namedRoutes('Signup')">
        <el-button type="primary" round v-if="!isLogin">注册</el-button>
      </router-link>
      <el-dropdown trigger="hover" v-if="isLogin">
        <div>
          <el-badge is-dot>
            <router-link :to="namedRoutes('User')">
              <el-avatar :src="require('@/assets/u332.png')" class="navbar-avatar"></el-avatar>
            </router-link>
          </el-badge>
        </div>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>
            <router-link :to="namedRoutes('User')">我的指南</router-link>
          </el-dropdown-item>
          <el-dropdown-item>
            评论
            <el-badge :value="12" />
          </el-dropdown-item>
          <el-dropdown-item>消息</el-dropdown-item>
          <el-dropdown-item>收藏</el-dropdown-item>
          <el-dropdown-item divided @click.native="logout">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-row>
    <div class="container">
      <el-menu
        mode="horizontal"
        text-color="#000000"
        active-text-color="#169757"
        :default-active="activeName"
      >
        <el-menu-item index="index">首页</el-menu-item>
        <el-menu-item index="discover">发现 & 精选</el-menu-item>
        <el-menu-item index="category">分类</el-menu-item>
      </el-menu>
    </div>
  </div>
</template>
<script>
import { namedRoutes } from "@/router/index.js";
import { mapGetters } from "vuex";

export default {
  components: {},
  data() {
    return {
      namedRoutes,
      activeName: "index",
      lnk: {
        index: "#/",
        discover: "",
        category: "",
        myinfo: "user/1",
        guides: "",
        logout: ""
      }
    };
  },
  computed: {
    ...mapGetters('user',['isLogin'])
  },
  methods: {
    async logout() {
      console.log("click!");
      await this.$store.dispatch("user/logout");
      this.$forceUpdate();
    },
  }
};
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
.navbar-icon {
  width: 80px;
  margin-top: 10px;
  float: left;
}
.navbar-avatar {
  vertical-align: middle;
  margin-left: 10px;
  cursor: pointer;
}
.btn-ground .el-button {
  margin-left: 10px;
}
.el-menu--horizontal.el-menu {
  border-style: none;
  border-width: 0px;
}
.el-menu--horizontal > .el-menu-item {
  height: 58px;
}
</style>