<template>
  <div style="height:100%;display:flex">
    <!-- <div class="sidebar-container">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        style="border-right:0px"
        router
      >
        <el-menu-item index="1">
          <i class="el-icon-picture"></i>
          <span slot="title">图片库</span>
        </el-menu-item>
        <el-menu-item index="2">
          <i class="el-icon-document-copy"></i>
          <span slot="title">历史文章</span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-document"></i>
          <span slot="title">保存的草稿</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">导航四</span>
        </el-menu-item>
      </el-menu>
      <div class="btn-group">
        <el-button type="primary" class="btn">发布</el-button>
        <el-button type="success" class="btn">保存</el-button>
      </div>
    </div>
    <div class="sidebar-content">
      <router-view />
    </div> -->
    <div class="editor-container">
      <Mdeditor v-model="content"></Mdeditor>
    </div>
  </div>
</template>

<script>
import Mdeditor from "@/components/editor/mdeditor-common-test.vue";
export default {
  data() {
    return {
      content: "",
      isCollapse: true
    };
  },
  components: {
    Mdeditor
  },
  methods: {
    handleUploadContent() {
      this.$store.dispatch("editor/uploadContent", { content: this.content });
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
.editor-container {
  flex: 1;
  /* min-width: 1342px; */
  height: 400px;
}
.editor-navbar {
  padding: 10px 0 5px 5px;
}
.sidebar-container {
  height: 100%;
}
.sidebar-content {
  flex: 1;
  border-left: solid 1px #e6e6e6;
}
.btn-group {
  padding-left: 50px;
}
.btn {
  margin: 10px 0;
  width: 100px;
  display: block;
}
.el-button + .el-button {
  margin-left: 0px;
}
</style>