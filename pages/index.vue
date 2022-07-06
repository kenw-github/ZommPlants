<template>
  <div>
    <NavBar />
    <div style="height:200px; width:100%; background-color:#f6f6f6; display:flex; flex-direction:column; justify-content:center; align-items:center;">
      <h1> Technical test PT LOG KAR ( js ) </h1>
      <NuxtLink to="/logkar">
        <span style="color:#43ac4a;text-decoration:underline; cursor:pointer;">
          Visit test.
        </span>
      </NuxtLink>
    </div>
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