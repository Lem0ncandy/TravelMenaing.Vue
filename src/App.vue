<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  name: "App"
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

html {
  height: 100%;
}

a {
  cursor: pointer;
  color: inherit;
  text-decoration: none;
}

.container {
  margin-right: auto;
  margin-left: auto;
  padding-left: 15px;
  padding-right: 15px;
}

@media (min-width: 992px) {
  .container {
    width: 900px;
  }
}

@media (min-width: 768px) {
  .container {
    width: 750px;
  }
}
</style>