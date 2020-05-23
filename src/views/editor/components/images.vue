<template>
  <div>
    <div class="images-container">
      <!-- <el-button style="width:100%">
        上传图片
        <i class="el-icon-upload el-icon--right"></i>
      </el-button>-->
      <el-upload
        class="upload-demo"
        action="http://localhost:5000/api/test/UpLoadFile"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :before-remove="beforeRemove"
        multiple
        :limit="3"
        :on-exceed="handleExceed"
        :file-list="fileList"
        style="width:100%"
      >
        <div style="width:100%">
          <el-button size="small" type="primary" style="width:100%;min-width:150px">
            上传图片
            <i class="el-icon-upload el-icon--right"></i>
          </el-button>
          <!-- <el-button
            style="width:100%;min-width:250px;margin-left: 0px"
            size="small"
            type="success"
            @click="submitUpload"
          >上传到服务器</el-button>-->
          <el-divider></el-divider>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </div>
      </el-upload>
    </div>
    <el-timeline class="images-container">
      <el-timeline-item timestamp="2018/4/2" placement="top">
        <el-card :body-style="{ padding: '2px' }">
          <el-image :src="require('@/assets/p0.jpg')" :fit="'cover'"></el-image>
          <div style="margin-right:0">
            <el-button icon="el-icon-search" circle></el-button>
            <el-button icon="el-icon-plus" circle @click="handleInsertImage('http://localhost:8080/img/p0.730d82ac.jpg')"></el-button>
            <el-button icon="el-icon-minus" circle></el-button>
            <el-button icon="el-icon-download" circle></el-button>
            <!-- <el-button style="width:50%;margin:5px 0">查看大图</el-button> -->
          </div>
        </el-card>
      </el-timeline-item>
      <el-timeline-item timestamp="2018/4/2" placement="top">
        <el-card :body-style="{ padding: '2px' }">
          <el-image :src="require('@/assets/p0.jpg')" :fit="'cover'"></el-image>
        </el-card>
      </el-timeline-item>
      <el-timeline-item timestamp="2018/4/2" placement="top">
        <el-card :body-style="{ padding: '2px' }">
          <el-image :src="require('@/assets/p0.jpg')" :fit="'cover'"></el-image>
        </el-card>
      </el-timeline-item>
      <el-timeline-item timestamp="2018/4/2" placement="top">
        <el-card :body-style="{ padding: '2px' }">
          <el-image :src="require('@/assets/p0.jpg')" :fit="'cover'"></el-image>
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>
<style lang="stylus" scoped>
.images-container {
  padding: 10px 22px;
}
</style>
<script>
import eventBus from '@/utils/eventBus.js'
export default {
  data() {
    return {
      fileList: [
        {
          name: "food.jpeg",
          url:
            "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
        },
        {
          name: "food2.jpeg",
          url:
            "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
        }
      ]
    };
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 3 个文件，本次选择了 ${
          files.length
        } 个文件，共选择了 ${files.length + fileList.length} 个文件`
      );
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`);
    },
    handleInsertImage(url){
      eventBus.$emit('insert-img',url)
    }
  },
  mounted(){
  }
};
</script>