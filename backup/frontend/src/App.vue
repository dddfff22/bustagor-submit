<template>
  <div id="app">
    <h1>게시글 리스트</h1>
    <div id="nav">
      <div   v-for="post in posts" v-bind:key="post.id">
        <router-link to="/post:">{{post.title}}</router-link> |
    <router-view/>
      </div>
    </div>
  </div>
  
</template>
<script>


export default{
  name:'App',
  
    data: function () {
    return {
      posts: []
    }
  },
  computed: {
    hasResult: function () {
      return this.posts.length > 0
    }
  },
  methods: {
    makelist: function () {
      const baseURI = 'http://localhost:8000';
      this.$http.get(`${baseURI}/post`)
      .then((result) => {
        console.log(result)
        this.posts = result.data
      })
    }
  }, beforeMount(){
    this.makelist()
 }
}

</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
