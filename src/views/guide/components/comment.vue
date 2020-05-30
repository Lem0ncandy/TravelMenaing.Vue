<template>
  <div v-loading="loading">
    <el-divider></el-divider>
    <div style="font-size:20px;margin-bottom:20px">发布的评论</div>
    <div v-for="comment in comments" :key="comment.id">
      <div style="display:flex;margin-bottom:20px;">
        <el-avatar :size="50" :src="comment.avatar" style="flex:none"></el-avatar>
        <div style="padding-left:20px;width:100%">
          <a href="#" style="font-size:16px">{{comment.username}}</a>
          <div style="font-size:14px;margin-top:10px;">{{comment.content}}</div>
          <div style="display:flex;font-size:12px;margin-top:10px;justify-content: space-between;">
            <div>{{comment.createTime}}</div>
            <div>
            <el-button type="text">回复</el-button>
            <el-button type="text">{{comment.upVoteCount}} 赞</el-button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="commentsCount"
      :current-page="currentPage"
      :page-size="size"
      @current-change="handleCurrentChange"
      style="text-align: center"
    ></el-pagination>
  </div>
</template>
<script>
import { getGuideComment } from "@/api/guide.js";

export default {
  props: {
    guideId: null
  },
  data() {
    return {
      loading: true,
      currentPage: 1,
      size: 5,
      comments: null,
      commentsCount: 0
    };
  },
  computed: {},
  methods: {
    getGuideComment(id, page, size) {
      this.loading = true;
      getGuideComment(id, page, size).then(response => {
        this.commentsCount = response.data.count;
        this.comments = response.data.comments;
        this.loading = false;
      });
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      this.getGuideComment(this.guideId, val, this.size);
    }
  },
  created() {
    this.getGuideComment(this.guideId, this.currentPage, this.size);
  }
};
</script>
