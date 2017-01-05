<template>
  <div class="container">
    <ul>
      <li v-for="item in movies">
        <router-link :to="'/movies/'+item.id">
            <div class="cover-wp" data-isnew="false" v-bind:data-id="''+item.id">
            <img :src="item.cover" v-bind:alt="''+item.title" v-bind:width="''+item.cover_x/10" v-bind:height="''+ item.cover_y/10">
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


<style>

</style>
