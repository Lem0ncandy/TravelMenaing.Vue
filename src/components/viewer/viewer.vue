<template>
  <div id="markdown-viewer" style="height:100%"></div>
</template>
<script>
import "codemirror/lib/codemirror.css";
import "@toast-ui/editor/dist/toastui-editor-viewer.css";
import Viewer from "@toast-ui/editor/dist/toastui-editor-viewer";

export default {
  props: {
    content: ""
  },
  data() {
    return {
      viwer: null,
      id: "markdown-viewer"
    };
  },
  methods: {
    initEditor() {
      const vw = new Viewer({
        el: document.getElementById(this.id),
        initialValue: "~~**initialValue**~~"
      });
      this.viwer = vw;
    }
  },
  mounted() {
    this.initEditor();
    this.viwer.setMarkdown(this.content);
  }
};
</script>
<style scoped>
.editor-container {
  height: 100%;
}
</style>