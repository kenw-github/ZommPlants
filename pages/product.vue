<template>
  <div>
    <NavBar />
    <ProductBanner />
    <Footer />
  </div>
</template>

<script>
import ProductNotFound from '~/components/ProductNotFound.vue'
export default {
  components: { ProductNotFound },
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
