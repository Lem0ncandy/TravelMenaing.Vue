<template>
  <div v-loading="loading">
    <div>
      <div class="clearfix">
        <el-avatar :size="64" :src="avatar" class="avatar"></el-avatar>
        <div class="basicinfo">
          <span class="name">{{username}}</span>
          <div
            class="abstract"
          >桥都麻袋,这样子讲话有什么错吗?吶,告诉我啊。搜噶,你们已经不喜欢了啊…真是冷酷的人呢,果咩纳塞,让你看到不愉快的东西了。像我这样的人,果然消失就好了呢。也许只有在二次元的世界里,才有真正的美好存在的吧,吶?</div>
        </div>
        <el-button style="float: right;" type="primary">关注</el-button>
      </div>
      <el-divider></el-divider>
      <div class="cardgroud">
        <el-card shadow="hover" class="item">
          <div class="info">粉丝</div>
          <div class="info data">{{fansCount}}</div>
        </el-card>
        <el-card shadow="hover" class="item">
          <div class="info">收到的赞</div>
          <div class="info data">{{guidesUpVoteCount}}</div>
        </el-card>
        <el-card shadow="hover" class="item">
          <div class="info">文章</div>
          <div class="info data">{{guideCount}}</div>
        </el-card>
        <el-card shadow="hover" class="item">
          <div class="info">关注</div>
          <div class="info data">{{fansCount}}</div>
        </el-card>
      </div>
    </div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane name="UserGuides">
        <span slot="label" class="tabsitem">
          <i class="el-icon-document"></i>攻略
        </span>
      </el-tab-pane>
      <el-tab-pane name="UserDynamic">
        <span slot="label" class="tabsitem">
          <i class="el-icon-bell"></i>动态
        </span>
      </el-tab-pane>
      <el-tab-pane name="UserComments">
        <span slot="label" class="tabsitem">
          <i class="el-icon-chat-line-round"></i>评论
        </span>
      </el-tab-pane>
      <el-tab-pane name="UserFans">
        <span slot="label" class="tabsitem">
          <i class="el-icon-user"></i> 粉丝
        </span>
      </el-tab-pane>
    </el-tabs>
    <router-view />
  </div>
</template>
<script>
import { getUserDetailInfo } from "@/api/user";
export default {
  methods: {
    handleClick(tab, event) {
      this.$router.push({ name: tab.name });
    },
    getUserDetailInfo(id) {
      this.loading = true;
      getUserDetailInfo(id).then(response => {
        this.userDetailInfo = response.data;
        this.loading = false;
      });
    }
  },
  data() {
    return {
      activeName: "UserGuides",
      userDetailInfo: null,
      loading: true
    };
  },
  computed: {
    avatar: function(value){
      return this.userDetailInfo.avatar;
    },
    commentCount: function(){
      return this.userDetailInfo.commentCount;
    },
    fansCount: function(){
      return this.userDetailInfo.fansCount;
    },
    gender: function(){
      return this.userDetailInfo.gender;
    },
    guideCount: function(){
      return this.userDetailInfo.guideCount;
    },
    guidesUpVoteCount: function(){
      return this.userDetailInfo.guidesUpVoteCount;
    },
    location: function(){
      return this.userDetailInfo.location;
    },
    occupation: function(){
      return this.userDetailInfo.occupation;
    },
    phoneNumber: function(){
      return this.userDetailInfo.phoneNumber;
    },
    rolesStr: function(){
      return this.userDetailInfo.rolesStr;
    },
    uId: function(){
      return this.userDetailInfo.uId;
    },
    username: function(){
      return this.userDetailInfo.username;
    },
  },
  created() {
    this.getUserDetailInfo(this.$route.params.id);
  }
};
</script>
<style lang="stylus" scoped>
.clearfix {
  display: block;
}

.clearfix:after {
  content: '.';
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}

.avatar {
  position: relative;
  float: left;
}

.data {
  margin-top: 10px;
}

.info {
  font-size: 16px;
  font-weight: 100;
  text-color: #ffffff;
}

.cardgroud {
  display: flex;
  margin: 30px 0;
}

.abstract {
  margin: 15px 0 0 0;
  font-size: 12px;
  color: #909399;
  width: 550px;
}

.name {
  font-size: 20px;
  font-weight: 900;
}

.basicinfo {
  float: left;
  margin: 0 0 0 15px;
}

.item {
  margin-bottom: 20px;
  flex: 1;
  text-align: center;
}

.istop {
  padding: 20px;
}

.tabsitem {
  font-size: 20px;
}
</style>