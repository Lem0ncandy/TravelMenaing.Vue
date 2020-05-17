<template>
  <div id="markdown-editor" @change="change()">
    <!-- <editor :options="defaultOptions" height="100%" ref="editor" id="1"></editor> -->
  </div>
</template>
<script>
import "codemirror/lib/codemirror.css";
import "@toast-ui/editor/dist/toastui-editor.css";
import Editor from "tui-editor";
import defaultOptions from "./defaultOptions";
export default {
  components: {
    Editor
  },
  data() {
    return {
      editor: null,
      id: "markdown-editor"
    };
  },
  methods: {
    initEditor() {
      console.log(defaultOptions);
      this.editor = new Editor({
        el: document.getElementById(this.id),
        ...defaultOptions
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
    },
    change(){
      console.log(this.editor.getValue());
      
    }
  },
  mounted() {
    this.initEditor();
    this.addbutton();
  }
};
</script>
<style scoped>
.editor-container {
  display: flex;
  height: 100%;
}
</style>