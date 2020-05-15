<template>
  <div class="infinite-list-wrapper" style="overflow:auto">
    <ul
      style="list-style-type:none;padding:0"
      v-infinite-scroll="load"
      infinite-scroll-disabled="disabled"
    >
      <li v-for="i in count" :key="i" class="list-item">
        <ContentCard></ContentCard>
      </li>
    </ul>
    <el-button type="info" class="loadbutton" :loading="this.loading" @click="requirdload">加载更多</el-button>
  </div>
</template>
<script>
import ContentCard from "./components/ContentCard.vue";
export default {
  components: {
    ContentCard
  },
  data() {
    return {
      count: 1,
      loading: false,
      limit: 5
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
      this.load()
      console.log(this.limit);
    }
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