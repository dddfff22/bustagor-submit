<template>
    <div class="About">
        <h1>{{ origin }}to{{destinaion}} route {{check}}found</h1>
        <a style="cursor: pointer; text-decoration: underline" v-on:click="navigate()">경로 재선택</a>
            <h1>{{posts}}</h1>
          <router-link :to="{name:'bus'}"><v-btn color="success">검색</v-btn></router-link>
  </div>
</template>
<script>
    import router from '../router'
    export default {
        name: 'About',
        data () {
            return {
                destinaion,
                origin,
                time,
                date,
                check,
                posts: [],
                 ok: true,
    type: 'A',
    loginType: 'username'
            }
        },
        created() {

                     this.destinaion = this.$route.query.destinaion;
                     this.origin = this.$route.query.origin;
                     this.time = this.$route.query.time;
                     this.date = this.$route.query.date;
                     const baseURI='http://localhost:8000';
                     this.$http.get(`${baseURI}/select`).
                     then((result)=>{
                     this.posts=result.data
                     console.log(11);
                });
        },
        methods: {
                navigate:function(){
                    router.go(-1);
                }, toggleLogin: function() {
      if ( this.loginType === 'username' ) {
        this.loginType = ''
      } else {
        this.loginType = 'username'
      }
    }
              
        }
        
    }
</script>