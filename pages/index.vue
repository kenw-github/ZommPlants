<template>
  <div>
    <NavBar />

    <HomeBanner id="#home" />
    <div style="height:10px; width:100%; background-color:#f6f6f6;" />

    <Footer />
    
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
  methods: {
    refreshFunction() {
      window.location.reload();
    }
  }
})
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>