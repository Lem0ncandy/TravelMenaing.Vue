<template>
  <div id="markdown-editor" style='font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;!import'></div>
</template>
<script>
import "codemirror/lib/codemirror.css";
import "@toast-ui/editor/dist/toastui-editor.css";
import Editor from "@toast-ui/editor";
import defaultOptions from "./defaultOptions";
import eventBus from "@/utils/eventBus.js";

export default {
  components: {},
  props: {
    value: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      editor: null,
      id: "markdown-editor"
    };
  },
  watch: {
    value(newValue, preValue) {
      if (newValue !== preValue && preValue !== this.editor.getMarkdown()) {
        this.editor.setMarkdown(newValue);
      }
    }
  },
  methods: {
    initEditor() {
      const ed = new Editor({
        el: document.getElementById(this.id),
        ...defaultOptions
      });
      this.editor = ed;
      this.editor.on("change", () => {
        this.$emit("input", this.editor.getMarkdown());
      });
    },
    handleInsertImage(val) {
      this.editor.exec("AddImage", {
        altText: "",
        imageUrl: val
      });
    }
  },
  mounted() {
    this.initEditor();
    eventBus.$on("insert-img", val => {
      this.handleInsertImage(val);
    });
  }
};
</script>
<style scoped>
.editor-container {
  height: 100%;
}
</style>