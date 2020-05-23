<template>
  <div>
    <button v-on:click="getMarkdown">getMarkdown</button>
    <button v-on:click="getHtml">getHtml</button>
    <editor ref="toastuiEditor" />
  </div>
</template>

<script>
import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';

import { Editor } from '@toast-ui/vue-editor';

export default {
  components: {
    editor: Editor
  },
  methods: {
    getMarkdown() {
      let markdown = this.$refs.toastuiEditor.invoke('getMarkdown');

      console.log(markdown);
    },
    getHtml() {
      let html = this.$refs.toastuiEditor.invoke('getHtml');
      console.log(html);
    }
  }
};
</script>