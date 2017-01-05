<template>
  <div class="container">
    <h1 class="text-center">热门电影</h1>
    <ul>
      <li v-for="item in movies" class="pull-left padd5">
        <router-link :to="'/movies/'+item.id">
            <div v-bind:data-id="''+item.id">
            <img :src="item.cover" v-bind:alt="''+item.title" v-bind:data-x="''+item.cover_x/10" v-bind:data-y="''+ item.cover_y/10" width="240" height="300">
            </div>
            <p>{{item.title}}<strong v-text="item.rate"></strong></p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: function(){
    return {
      movies: []
    }
  },
  methods: {
    
  },
  created: function(){
    this.$http.get("/static/movies.json")
    .then(function(response){
      var data = response.data;
      this.movies = data.subjects;
    });
  }
}
</script>


<style scoped>
ul {
  list-style: none;
}
.padd5 {
  padding: 5px;
}
</style>
