<template>
    <div id="markdown-editor"></div>
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
    addbutton() {
      const toolbar = this.editor.getUI().getToolbar();
      this.editor.eventManager.addEventType("clickCustomButton");
      this.editor.eventManager.listen("clickCustomButton", function() {
        alert("Click!");
      });

      toolbar.insertItem(0, {
        type: "button",
        options: {
          className: "first",
          event: "clickCustomButton",
          tooltip: "Custom Button",
          text: "@",
          style: "background:none;border-color:lime;"
        }
      });
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