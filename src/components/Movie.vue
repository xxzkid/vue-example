<template>
  <div class="container">
    <h1 v-text="movie.title"></h1>
    <img :src="movie.cover" v-bind:alt="''+movie.title" v-bind:data-x="''+movie.cover_x" v-bind:data-y="''+ movie.cover_y">
    <h1>评分:{{movie.rate}}</h1>
  </div>
</template>

<script>
export default {
  data: function(){
    return {
      movie: {}
    }
  },
  methods: {
    
  },
  created: function(){
    var id = this.$route.params.id;
    this.$http.get("/static/movies.json")
    .then(function(response){
      var data = response.data;
      var subjects = data.subjects;
      for(var i=0, len=subjects.length; i<len; i++) {
        if(subjects[i].id === id) {
          this.movie = subjects[i];
          break;
        }
      }
    });
  }
}
</script>


<style>

</style>
