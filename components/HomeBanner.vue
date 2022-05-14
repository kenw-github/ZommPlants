<template>
  <div class="hello" style="display:flex; align-items:center; justify-content:center; flex-direction:column; padding:72px 0;">
    <span style="color:#004751; font-size:18px;">
      #JusticeForZombies
    </span>
    <h1 style="font-size:48px; margin-bottom:0px;">ZommPlants</h1>
    <p style="margin-top:6px; font-size:18px;">
      Farming For Zombies.
    </p>
    <NuxtLink to="/product">
      <span style="color:#43ac4a;text-decoration:underline; cursor:pointer;">
        Visit Our Shop.
      </span>
    </NuxtLink>
    <img src="~/assets/banner.png" style="width:100%; max-width:600px; margin:30px auto;"/>
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
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

</style>
