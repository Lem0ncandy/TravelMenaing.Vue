<template>
  <div v-if="!loading">
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
            {{upVoteCount}}
            <i class="el-icon-caret-top"></i>
          </span>
        </div>
      </div>
    </el-card>
    <el-card style="margin-top:20px">
      <Viewer v-bind:content="content"></Viewer>
    </el-card>
    <el-divider></el-divider>
    <div style="padding:0 20px;">
      <div style="display:flex;margin-bottom:20px">
        <el-avatar :size="50" :src="avatar" style="flex:none"></el-avatar>
        <el-input
          type="textarea"
          placeholder="请输入内容"
          v-model="textarea"
          resize="none"
          rows="3"
          style="flex:1;padding-left:20px;"
        ></el-input>
      </div>
      <div style="display:flex">
        <div style="flex:1"></div>
        <el-button type="primary" @click="handelReplyGuide" >发布</el-button>
      </div>
      <Comment :guideId="this.$route.params.id"></Comment>
    </div>
  </div>
</template>
<style scoped>
.text-info {
  font-size: 12px;
}
</style>
<script>
import Comment from "@/views/guide/components/comment.vue";
import Viewer from "@/components/viewer/viewer.vue";
import { getOneGuide, ReplyGuide } from "@/api/guide.js";
export default {
  components: {
    Viewer,
    Comment
  },
  data() {
    return {
      guide: null,
      loading: true,
      textarea: ""
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
    },
    handelReplyGuide: function() {
      ReplyGuide(this.$route.params.id, this.textarea).then(response => {
        console.log(response.data.isSucess);
        // getCurrentGuide(guideId);
      });
    }
  },
  mounted() {
    this.getCurrentGuide(this.$route.params.id);
  }
};
</script>