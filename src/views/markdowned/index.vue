<template>
<div style="height:100%">
  <Mdeditor v-model="content"></Mdeditor>
  <el-button @click="handleUploadContent()">submit</el-button>
</div>
</template>

<script>
import Mdeditor from "@/components/editor/mdeditor-common.vue";
export default {
  data() {
    return {
      content: ""
    };
  },
  components: {
    Mdeditor
  },
  methods: {
    handleUploadContent() {
        this.$store.dispatch('editor/uploadContent',{content:this.content});
    }
  }
};
</script>