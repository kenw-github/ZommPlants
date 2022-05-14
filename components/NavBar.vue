<template>
  <div>
    <ul class="navbar">
      <li class="navbar-li">
        <NuxtLink to="/"> 
          <img width="18" height="18" src="~/assets/icon/archive-arrow-up.png">
        </NuxtLink>
      </li>
      <li class="navbar-li md-d-none">
        <NuxtLink to="/"> 
          <a class="active" href="#home">Home</a>
        </NuxtLink>
      </li>
      <li class="navbar-li md-d-none">
        <NuxtLink to="/product"> 
          <a href="#news">Product</a>
        </NuxtLink>
      </li>
      <li class="navbar-li md-d-none">
        <NuxtLink to="/contact">
          <a href="#contact">Contact</a>
        </NuxtLink>
      </li>
      <li class="navbar-li">
        <NuxtLink to="/user">
          <img width="18" height="18" src="~/assets/icon/account.png">
        </NuxtLink>
      </li>
    </ul>
    <div style="height:42px; width:100%;" />
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
.navbar {
  width:100%;
  list-style-type: none;
  margin: auto 0;
  padding: 0;
  overflow: hidden;
  background-color: rgba(0,0,0,0.875);
  display:flex;
  justify-content:center;
  align-items:center;
  position:fixed;
  min-height:42px;
  z-index:9999;
}

.navbar-li {
  float: left;
  padding: 10px 50px;
}

li a {
  font-size: 12px;
  display: block;
  color: silver;
  text-align: center;
  text-decoration: none;
  transition: 0.3s;
}

li img{
  cursor: pointer;
  opacity: 0.7;
  transition: 0.3s;
}

li img:hover {
  opacity: 1;
}

li a:hover {
  color: white;
}
@media screen and (max-width: 600px) {
  .md-d-none {
    display: none;
  }
}

</style>
