<template>
  <div style="display:flex; align-items:center; justify-content:center; flex-direction:column; background-color:white; padding:72px 0;">
    <h1 style="margin-bottom:6px; font-size:48px;">Products</h1>
    <p style="margin-top:6px; font-size:18px;">
      Empower Your Zombies.
    </p>
    <div style="max-width:800px; margin:48px 0px; display:flex; align-items:center; justify-content:center; flex-wrap: wrap;">
      <div 
        v-for="(product, index) in products"
        v-bind:key="index"
      >      
        <NuxtLink :to="{ path:'/products/'+product.id, params:product }">
        <div class="card" style="margin:3px 3px 18px 3px; height:350px; width:300px;">
          <img :src="require(`~/assets/${product.id}.jpg`)" alt="Avatar" style="width:100%; height:250px;">
          <div class="container">
            <span style="padding:8px; text-align:left;">{{ product.name }}</span> 
            <p style="text-align:right; color:#43ac4a;">
              <span style="font-size:24px; padding-right:8px;">{{ product.price }}</span> 
              <span style="font-size:12px;">Zombies</span>
            </p>
          </div>
        </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  computed: {
    products() {
      return this.$store.getters.getProducts
    },
  },
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

.card {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.1);
  background-color: white;
  transition: 0.3s;
  width: 40%;
  border-radius: 5px;
  cursor: pointer;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.5);
}

img {
  border-radius: 5px 5px 0 0;
}

.container {
  padding: 12px 16px;
  display: flex;
  flex-direction: column;
  justify-content: left;
}
</style>
