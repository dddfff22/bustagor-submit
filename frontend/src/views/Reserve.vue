<template>
  <div id="Reserve">
  <v-app id="inspire">
      <v-layout row wrap>
 <v-flex xs12 sm6 md4>
        <v-subheader>Prepended icon</v-subheader>
      </v-flex>
  <v-flex xs12 sm6 md4>
        <v-select
          :items="states"
          v-model="e1"
          menu-props="auto"
          label="Select"
          hide-details
          prepend-icon="map"
          single-line
        ></v-select>
      </v-flex>
   <v-flex xs12 sm6 md4>
        <v-subheader>Prepended icon</v-subheader>
      </v-flex>
 <v-flex xs12 sm6 md4>
        <v-select
          :items="states"
          v-model="e2"
          menu-props="auto"
          label="Select"
          hide-details
          prepend-icon="map"
          single-line
        ></v-select>
      </v-flex>
    <v-flex xs12 sm6 md4>
      <v-menu
        :close-on-content-click="false"
        v-model="menu2"
        :nudge-right="40"
        lazy
        transition="scale-transition"
        offset-y
        full-width
        min-width="290px"
      >
        <v-text-field
          slot="activator"
          v-model="date"
          label="Picker without buttons"
          prepend-icon="event"
          readonly
        ></v-text-field>
        <v-date-picker v-model="date" @input="menu2 = false"></v-date-picker>
      </v-menu>
    </v-flex>
   <v-flex xs11 sm5>
      <v-menu
        ref="menu"
        :close-on-content-click="false"
        v-model="menu3"
        :nudge-right="40"
        :return-value.sync="time"
        lazy
        transition="scale-transition"
        offset-y
        full-width
        max-width="290px"
        min-width="290px"
      >
        <v-text-field
          slot="activator"
          v-model="time"
          label="Picker in menu"
          prepend-icon="access_time"
          readonly
        ></v-text-field>
        <v-time-picker
          v-if="menu3"
          v-model="time"
          full-width
          @change="$refs.menu.save(time)"
        ></v-time-picker>
      </v-menu>
    </v-flex>
    <v-spacer></v-spacer>
  </v-layout>
  <router-link :to="{name:'about',query: {origin:e1, destination:e2,date:date,time:time}}"><v-btn color="success">검색</v-btn></router-link>
  </v-app>
  </div>
</template>



<script>
export default {
  name: 'Reserve',
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
