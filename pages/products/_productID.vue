<template>
  <div>
    <NavBar />
    <div style="display:flex; align-items:center; justify-content:start; flex-direction:column; width:100%; height:750px; max-width:600px; margin:0 auto;">
      <img :src="require(`~/assets/${productID.id}.jpg`)" style="width:100%; max-width:600px; margin:12px auto;"/>
      <h1 style="margin:0; font-size:36px;">{{ productID.name }}</h1>
      <p style="text-align:right; color:#43ac4a;">
        <span style="font-size:24px; padding-right:8px;">{{ productID.price }}</span> 
        <span style="font-size:12px;">Zombies</span>
      </p> 
      <h3 style="text-align:center; padding:12px;">{{ productID.desc }}</h3>

      <div>
        <button style="padding:6px 16px; border-radius:10px;" @click="minus()">-</button>
        <input type="number" min="1" disabled style="padding:6px 16px; border-radius:10px;" v-model="count">
        <button style="padding:6px 16px; border-radius:10px;" @click="add()">+</button>
      </div>

      <span  style="text-align:center; padding:12px;">
        <a style="text-decoration:underline; font-size:16px;">Buy Now</a>
      </span>
    </div>
    <Footer />
  </div>
  
</template>

<script>
export default {
  props: [ 'product' ],
  computed: {
    count() {
      return this.$store.getters.getCount
    },
    products() {
      return this.$store.getters.getProducts
    },
    productID() {
      var id = this.$route.path.substr(this.$route.path.length - 1);
      return this.products.find( product => product.id == id );
    }
  },
  methods: {
    add() {
      this.$store.commit('tambahCount')
    },
    minus() {
      this.$store.commit('kurangCount')
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
