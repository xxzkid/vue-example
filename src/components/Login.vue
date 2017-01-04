<template>
  <div class="app">
    <form role="form" onsubmit="return false;">
      <div class="form-group">
        <label>Email address</label>
        <input type="email" class="form-control" v-model="user.email" placeholder="Enter email">
      </div>
      <div class="form-group">
        <label>Password</label>
        <input type="password" class="form-control" v-model="user.password" placeholder="Password">
      </div>
      <button type="submit" @click="login" class="btn btn-default">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  data: function(){
    return {
      user:{}
    }
  },
  methods: {
    login: function(){
      this.$http.get("/static/test.json?_t="+new Date().getTime()).then(function(response){
        var data = response.data;
        if(data && data.c === "0") {
          this.$router.push({path: '/list'})
        }
      });
    },
    echoLogin:function(){
      this.$http.get("/static/echo-login.json?_t="+new Date().getTime()).then(function(response){
        var data = response.data;
        this.user = data.d;
      });
    }
  },
  created: function(){
    this.echoLogin();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
