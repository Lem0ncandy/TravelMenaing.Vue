<template>
  <div style="height:100%;display:flex">
    <div class="sidebar-container">
      <el-menu
        default-active="1"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        style="border-right:0px"
      >
        <el-menu-item @click="routerPush(indexs.images)">
          <i class="el-icon-picture"></i>
          <span slot="title">图片库</span>
        </el-menu-item>
        <el-menu-item>
          <i class="el-icon-document-copy"></i>
          <span slot="title">历史指南</span>
        </el-menu-item>
        <el-menu-item>
          <i class="el-icon-document"></i>
          <span slot="title">保存的草稿</span>
        </el-menu-item>
        <el-menu-item @click="dialogVisible = true">
          <i class="el-icon-setting"></i>
          <span slot="title">封面图片</span>
        </el-menu-item>
      </el-menu>
      <div class="btn-group">
        <el-button type="primary" class="btn" @click="handleUploadGuide">发布</el-button>
        <el-button type="success" class="btn">保存</el-button>
      </div>
    </div>
    <div class="sidebar-content">
      <router-view />
      <!-- <Images></Images> -->
    </div>
    <div class="editor-container">
      <el-input v-model="title" placeholder="请输入标题" class="title" maxlength="20" show-word-limit></el-input>
      <Mdeditor v-model="content"></Mdeditor>
    </div>
    <el-dialog title="提示" :visible.sync="dialogVisible" width="30%">
      <span style="display:inline">图片URL:</span>
      <el-input v-model="coverImageUrl" placeholder="请输入内容" style="margin-left:20px;width:80%"></el-input>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import Mdeditor from "@/components/editor/mdeditor-common.vue";
import Images from "@/views/editor/components/images.vue";

export default {
  data() {
    return {
      content: "",
      title: "",
      coverImageUrl: "",
      isCollapse: true,
      dialogVisible: false,
      indexs: {
        images: "Images",
        historyGuides: "HistoryGuides",
        saveDraft: "SaveDraft"
      }
    };
  },
  components: {
    Mdeditor,
    Images
  },
  methods: {
    handleUploadGuide() {
      this.$store.dispatch("editor/uploadGuide", {
        content: this.content,
        title: this.title,
        coverImageUrl:this.coverImageUrl
      });
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    routerPush(name) {
      this.$router.push({ name: name });
    }
  }
};
</script>
<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: auto;
}
.editor-container {
  flex: 1;
  min-width: 1342px;
  height: calc(100% - 42px);
}
.sidebar-container {
  height: 100%;
  min-width: 200px;
  flex: 1;
}
.sidebar-content {
  flex: 1;
  width: 300px;
  border-left: solid 1px #e6e6e6;
  overflow: auto;
}
.btn-group {
  padding: 20px;
}
.btn {
  margin: 10px 0;
  width: 100%;
  display: block;
}
.el-button + .el-button {
  margin-left: 0px;
}
.title {
  width: 100%;
}
</style>