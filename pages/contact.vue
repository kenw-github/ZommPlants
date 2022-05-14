<template>
  <div>
    <NavBar />
    <div style="display:flex; align-items:center; justify-content:center; flex-direction:column; background-color:black; width:100%; height:750px;">
      <h1 style="color:white; margin:0; font-size:36px;">Get Support</h1>
      <h3 style="color:white; text-align:center; padding:12px;">Find the leading expert for your zombie nature related problems.</h3>
      <span  style="color:white; text-align:center; padding:12px;">
        WhatsApp: 089694201111
        <br>
        <br>
        Email: andriwilliam666@gmail.com
      </span>
      <img src="~/assets/plant.png" style="width:100%; max-width:300px; margin:12px auto;"/>
    </div>
    <Footer />
  </div>
  
</template>

<script>
export default {
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
