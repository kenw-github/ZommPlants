<template>
  <div>
    <NavBar />
    <div style="display:flex; align-items:center; justify-content:center; flex-direction:column; background-color:White; width:100%; height:600px;">
      <h1>Sign in to ZommPlants</h1>
      <form @submit.prevent="login">
        <div style="display:flex; flex-direction:column;">
          <label for="uname" style=" margin:12px 0;"><b>Username</b></label>
          <input type="text" placeholder="Enter Username" name="uname" required style="padding:6px 16px; border-radius:10px;" v-model="username">

          <label for="psw" style=" margin:12px 0;"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="psw" required style="padding:6px 16px; border-radius:10px;" v-model="password">
            
          <button type="submit" style="padding:6px; margin:12px 0; cursor:pointer;">Login</button>
        </div>
      </form>
    </div>
    <Footer />
  </div>
  
</template>

<script>
export default {
  props: {
    msg: String
  },
  data() {
    return {
      username: "",
      password: "",
    }
  },
  methods:{
    login(){
      if(this.username == "abc" && this.password == "123"){
        token = 'token 2';
      } else {
        alert("username password salah")
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
