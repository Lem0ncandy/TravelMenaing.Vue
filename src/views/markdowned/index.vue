<template>
  <div style="height:100%">
    <div style="width: 210px !important;position: fixed;">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      style="width:100%"
      >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
    </div>
    <Mdeditor v-model="content" class="mdeditor"></Mdeditor>
  </div>
</template>

<script>
import Mdeditor from "@/components/editor/mdeditor-common.vue";
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
.mdeditor{
  margin-left: 201px;
  min-width: 1361px;
  height: 100%;
}
.editor-navbar{
  margin: 20px;
}
/* @media (min-width: 992px) {
  .editor-container {
    width: 960px;
  }
}

@media (min-width: 1081px) {
  .editor-container {
    width: 960px;
  }
}

@media (min-width: 992px) {
  .editor-container {
    width: 970px;
  }
}

@media (min-width: 768px) {
  .editor-container {
    width: 750px;
  }
} */
</style>