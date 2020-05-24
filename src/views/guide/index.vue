<template>
  <div v-loading="loading">
    <el-card class="box-card">
      <div slot="header">
        <el-button style="float:right;" type="primary">关注</el-button>
        <div style="display:flex;align-items: start;">
          <el-avatar :size="50" :src="avatar"></el-avatar>
          <div style="display:inline;margin-left:10px">
            <div>{{username}}</div>
            <div>南京 | 大学生</div>
          </div>
        </div>
        <div style="margin-top:30px;font-size: 20px;">{{title}}</div>
      </div>
      <div class="text-info">
        <span>{{updateTime}}</span>
        <div style="display:inline;float:right">
          <span class="info">{{viewedCount}}浏览</span>
          <span class="info">
            {{up}}
            <i class="el-icon-caret-top"></i>
          </span>
        </div>
      </div>
    </el-card>
    <el-card style="margin-top:20px">
      <Viewer v-bind:content="content"></Viewer>
    </el-card>
  </div>
</template>
<style scoped>
.text-info {
  font-size: 12px;
}
</style>
<script>
import Viewer from "@/components/viewer/viewer.vue";
import { getOneGuide } from "@/api/viewer.js";
export default {
  components: {
    Viewer
  },
  data() {
    return {
      guide: null,
      loading: true
    };
  },
  computed: {
    content: function() {
      return this.guide.content;
    },
    title: function() {
      return this.guide.title;
    },
    avatar: function() {
      return this.guide.avatar;
    },
    viewedCount: function() {
      return this.guide.viewedCount;
    },
    username: function() {
      return this.guide.username;
    },
    userId: function() {
      return this.guide.userId;
    },
    updateTime: function() {
      return this.guide.updateTime;
    },
    upVoteCount: function() {
      return this.guide.upVoteCount;
    }
  },
  methods: {
    getCurrentGuide(id) {
      this.loading = true;
      getOneGuide(id).then(response => {
        this.guide = response.data;
        this.loading = false;
      });
    }
  },
  created() {
    this.getCurrentGuide(this.$route.params.id);
  }
};
</script>