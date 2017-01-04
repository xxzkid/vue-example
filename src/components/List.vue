<template>
  <div class="container">
    <ul class="list-style-none">
      <li class="item-movie" v-for="item in movies">
        <p v-text="item.title"></p>
        <p v-text="item.desc"></p>
        <p><img :src="item.picUrl"></p>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  data: function(){
    return {
      movies : [
        {
          "title":"小电影",
          "desc":"描述",
          "picUrl":'https://avatars1.githubusercontent.com/u/5835766?v=3&s=40'
        }
      ]
    }
  },
  methods: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.list-style-none {
  list-style: none;
}
.item-movie {
  border: 1px solid gray;
  border-radius: 20px;
  padding: 40px;
}
</style>
