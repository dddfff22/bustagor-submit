<template>
  <div id="home">
      <img src="../assets/com.png">
      <router-link :to="{name:'reserve'}"><v-btn color="success">RESERVATION</v-btn></router-link>
     <router-link :to="{name:'reserve'}"><v-btn color="success">ADDFAVORITE</v-btn></router-link>
       <router-link :to="{name:'reserve'}"><v-btn color="success">SENDQUESTION</v-btn></router-link>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data:function(){
    return {posts:[], options: [
      { text: 'One', value: 'A' },
      { text: 'Two', value: 'B' },
      { text: 'Three', value: 'C' }
    ], selected1: 'A', date: new Date().toISOString().substr(0, 10),
      menu: false,
      modal: false,
      menu2: false,
      menu3: false,
      time: null,
      e1: 'none',
        e2: 'none',
        e3: null,
        e4: null,
        items: [
          { text: 'State 1' },
          { text: 'State 2' },
          { text: 'State 3' },
          { text: 'State 4' },
          { text: 'State 5' },
          { text: 'State 6' },
          { text: 'State 7' }
        ],
        states: [
          '대구','서울','수원','부산','대전','포항','인천','광주','울산'
        ]
 }
  },
  created() {        
                    
                    
                    
                     const baseURI='http://localhost:8000';
                     this.$http.get(`${baseURI}/reservation/`).
                     then((result)=>{
                    console.log(this.result);
					 
                     });
        },
  components: {

  },computed:{
    hasResult : function(){
      return this.posts.length > 0
    }
  },
  methods:{
    searchTerm: function(){
      const baseURI='http://localhost:8000';
      this.$http.get(`${baseURI}/reservation`).
      then((result)=>{
        console.log(result);
        this.posts=result.data
      })
      
    }
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
