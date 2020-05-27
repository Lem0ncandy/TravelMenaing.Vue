<template>
  <el-card class="box-card" v-loading="false">
    <router-link class="text-title" :to="{ name: 'Guide', params: { id: id }}">{{title}}</router-link>
    <el-image
      v-if="coverImage!==null&&coverImage!==''"
      :src="coverImage"
      style="float:right;width:140px;margin-left:10px"
    ></el-image>
    <div class="text-content item">{{guide.content.slice(0,100) + "..."}}</div>
    <div class="text-info">
      <span class="info">{{viewedCount}}</span>
      <span class="info">
        {{upVoteCount}}
        <i class="el-icon-caret-top"></i>
      </span>
      <span class="info">{{updateTime}}</span>
      <a style="float:right;">
        <span class="info name">{{username}}</span>
        <el-avatar :size="30" :src="avatar" class="avatar"></el-avatar>
      </a>
    </div>
  </el-card>
</template>
<script>
export default {
  props: {
    guide: null
  },
  data() {
    return {
      loading: true,
      circleUrl:
        "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
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
    },
    coverImage: function() {
      return this.guide.coverImage;
    },
    id: function() {
      return this.guide.id;
    }
  },
};
</script>
<style scoped>
.name {
  font-size: 14px;
  font-weight: 600;
}
.avatar {
  vertical-align: middle;
}
.info {
  margin-right: 10px;
  display: inline-block;
}
.text-content {
  font-size: 14px;
  color: #3e3d3d;
}
.text-title {
  font-size: 18px;
}
.text-info {
  font-size: 12px;
  padding-right: 150px;
}
.item {
  padding: 18px 0;
}
.box-card {
  min-height: 140px;
}
</style>