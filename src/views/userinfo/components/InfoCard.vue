<template>
  <div>
    <div class="clearfix">
      <el-avatar :size="64" :src="require('@/assets/u332.png')" class="avatar"></el-avatar>
      <div class="basicinfo">
        <span class="name">成都吃客</span>
        <div
          class="abstract"
        >桥都麻袋,这样子讲话有什么错吗?吶,告诉我啊。搜噶,你们已经不喜欢了啊…真是冷酷的人呢,果咩纳塞,让你看到不愉快的东西了。像我这样的人,果然消失就好了呢。也许只有在二次元的世界里,才有真正的美好存在的吧,吶?</div>
        <!-- <div class="abstract">这家伙啥也没写</div> -->
      </div>
      <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
    </div>
    <el-divider></el-divider>
    <div class="cardgroud">
      <el-card shadow="hover" class="item">
        <div class="info">粉丝</div>
        <div class="info data">114514</div>
      </el-card>
      <el-card shadow="hover" class="item">
        <div class="info">收到的赞</div>
        <div class="info data">114514</div>
      </el-card>
      <el-card shadow="hover" class="item">
        <div class="info">文章</div>
        <div class="info data">114514</div>
      </el-card>
      <el-card shadow="hover" class="item">
        <div class="info">关注</div>
        <div class="info data">114514</div>
      </el-card>
    </div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane name="first">
        <span slot="label" class="tabsitem">
          <i class="el-icon-document"></i>攻略
        </span>
        <ContentCard></ContentCard>
      </el-tab-pane>
      <el-tab-pane name="second">
        <span slot="label" class="tabsitem">
          <i class="el-icon-bell"></i>动态
        </span>
      </el-tab-pane>
      <el-tab-pane name="third">
        <span slot="label" class="tabsitem">
          <i class="el-icon-chat-line-round"></i> 评论
        </span>
      </el-tab-pane>
      <el-tab-pane name="fourth">
        <span slot="label" class="tabsitem">
          <i class="el-icon-user"></i> 粉丝
        </span>
      </el-tab-pane>
      <el-tab-pane name="five">
        <span slot="label" class="tabsitem">
          <i class="el-icon-user"></i>
          Test
        </span>
      </el-tab-pane>
    </el-tabs>
    <router-view />
  </div>
</template>
<script>
import ContentCard from "@/views/index/components/ContentCard.vue";
export default {
  components: {
    ContentCard
  },
  methods:{
    handleClick(tab,event){
      console.log('switch!');
      
    }
  },
  data() {
    return {
      activeName: "first"
    };
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

.tabsitem {
  font-size: 20px;
  // padding-left: 20px
}

.istop {
  padding: 20px;
}
</style>