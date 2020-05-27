<template>
  <div class="infinite-list-wrapper" style="overflow:auto">
    <ul
      style="list-style-type:none;padding:0"
      v-infinite-scroll="load"
      infinite-scroll-disabled="disabled"
    >
      <li v-for="guide in guideList" :key="guide.id" class="list-item">
        <ContentCard v-bind:guide="guide"></ContentCard>
      </li>
    </ul>
    <el-button type="info" class="loadbutton" :loading="this.loading" @click="requirdload">加载更多</el-button>
  </div>
</template>
<script>
import ContentCard from "@/components/ContentCard.vue";
import { getAllGuideByUserId } from "@/api/guide.js";
export default {
  components: {
    ContentCard
  },
  data() {
    return {
      count: 1,
      loading: true,
      limit: 5,
      guideList: null
    };
  },
  computed: {
    noMore() {
      return this.count >= this.limit;
    },
    disabled() {
      return this.loading || this.noMore;
    }
  },
  methods: {
    load() {
      this.loading = true;
      setTimeout(() => {
        this.count += 2;
        this.loading = false;
      }, 800);
    },
    requirdload: function(tab, event) {
      this.limit += 4;
      this.loading = true;
      this.load();
      console.log(this.limit);
    },
    getAllGuideByUserId(id) {
      this.loading = true;
      getAllGuideByUserId(id).then(reseponse => {
        this.guideList = reseponse.data;
        this.loading = false;
      });
    }
  },
  created() {
    this.getAllGuideByUserId(this.$route.params.id);
  }
};
</script>
<style scoped>
.list-item {
  margin-bottom: 30px;
}
.loadbutton {
  display: block;
  width: 50%;
  margin: 30px auto 60px;
}
</style>