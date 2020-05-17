<template>
  <div>
      <el-button v-on:click="testConnect" type="info">btn</el-button>
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
    testConnect(){
      this.$store.dispatch('test/testConnect',this.requestdata).then(() =>{
        console.log('sucess');
      })
    }
  }
};
</script>