<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  name: "App",
};
</script>
<style lang="stylus">
#app {
  height: 100%;
}
body {
  height: 100%;
  // height: 500px;
  margin: 0;
  padding: 0;
}
html{
  height :100%;
}
a{
  cursor: pointer;
    color: inherit;
    text-decoration: none;
}
</style>