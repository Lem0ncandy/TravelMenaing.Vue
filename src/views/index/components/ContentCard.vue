<template>
  <el-card class="box-card">
    <a class="text-title">成都攻略|三天玩遍精华景点（行程篇）</a>
    <el-image
      :src="require('@/assets/p0.jpg')"
      style="float:right;width:140px;margin-left:10px"
    ></el-image>
    <div class="text-content item">✔杜甫草堂票价：60元特点：杜甫茅草屋，草堂青花瓷墙，很大，时间不够可舍去✔春熙路太古里票价：免费主要看点：1. 爬楼熊猫，ifs金融中心大楼7楼；2. 方所书店，太古里负一楼；3. Line Friend，但规模小，外面拍照；4. 无印良品，亚洲旗舰店，上下四层。</div>
    <div class="text-info">
      <span class="info">114514浏览</span>
      <span class="info">
        6320
        <i class="el-icon-caret-top"></i>
      </span>
      <a style="float:right;">
        <span class="info name">成都吃客</span>
        <el-avatar :size="30" :src="require('@/assets/u332.png')" class="avatar"></el-avatar>
      </a>
    </div>
  </el-card>
</template>
<style scoped>
.name{
  font-size: 14px;
  font-weight: 600;
}
.avatar{
  vertical-align: middle;
}
.info {
  margin-right: 10px;
  display: inline-block
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
}
.item {
  padding: 18px 0;
}
.box-card {
  min-height: 140px;
  
}
</style>
<script>
export default {
  data: () => {
    return {
      circleUrl:
        "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
    };
  }
};
</script>