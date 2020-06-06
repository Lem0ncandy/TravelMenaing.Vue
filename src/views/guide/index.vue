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
    <el-button type="primary" style="width:100%" @click="dialogVisible = true">查看路线</el-button>

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
        <el-button type="primary" @click="handelReplyGuide">发布</el-button>
      </div>
    </div>
    <el-dialog title="提示" :visible.sync="dialogVisible" width="50%" :before-close="handleClose">
      <div style="width:100%;height:500px">
      <baidu-map class="map">
        <bm-view class="map"></bm-view>
        <bm-driving
          start="天通苑北"
          end="宋家庄地铁站"
          :auto-viewport="true"
          policy="BMAP_DRIVING_POLICY_LEAST_DISTANCE"
          :panel="false"
          location="北京"
          :waypoints="['西二旗','潭西胜境']"
        ></bm-driving>
        <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
      </baidu-map>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<style scoped>
.text-info {
  font-size: 12px;
}
.transition-box {
  margin-bottom: 10px;
  width: 200px;
  height: 100px;
  border-radius: 4px;
  background-color: #409eff;
  text-align: center;
  color: #fff;
  padding: 40px 20px;
  box-sizing: border-box;
  margin-right: 20px;
}
.map {
  width: 100%;
  height: 100%;
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
      textarea: "",
      dialogVisible: false
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
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    }
  },
  mounted() {
    this.getCurrentGuide(this.$route.params.id);
  }
};
</script>