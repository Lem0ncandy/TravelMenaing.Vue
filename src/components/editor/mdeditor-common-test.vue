<template>
    <div style="height:100%">
      <button @click="bold">lll</button>
    <div id="markdown-editor">
    </div>
    </div>
</template>
<script>
import "codemirror/lib/codemirror.css";
import "@toast-ui/editor/dist/toastui-editor.css";
import Editor from "@toast-ui/editor";
import defaultOptions from "./defaultOptions";
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
      if (newValue !== preValue && newValue !== this.editor.getMarkdown()) {
        this.editor.setValue(newValue);
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
    bold(){
      this.editor.exec("AddImage",{altText:'',imageUrl:"http://localhost:8080/img/p0.730d82ac.jpg"});
    }
  },
  mounted() {
    this.initEditor();
    // this.addbutton();
  }
};
</script>
<style scoped>
.editor-container {
  height: 100%;
}
</style>