<template>
  <div>
      <el-button v-on:click="testAxios" type="info">btn</el-button>
  </div>
</template>

<script>
export default {
  data:() =>{
    return{
      requestdata:1,
    }
  },
  methods: {
    testAxios(){
      this.$store.dispatch('test/testAxios',this.requestdata).then(() =>{
        console.log('sucess');
      })
    }
  }
};
</script>