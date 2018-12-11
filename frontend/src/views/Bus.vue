<template>
    <div class="Bus">
        
    
<table class="tg">
    <table><h1>    선택된 좌석수:{{data}},가격:{{sum}}</h1>    <button>결제하기</button></table>
  <tr>
    <td class="tg-0pky"><button @click="click(1)"><img v-if="check[1]" src="../assets/seat_off.png"/><img v-else src="../assets/seat_on.png"/></button><span>1</span></td>
    <td class="tg-0pky"><button @click="click(2)"><img v-if="check[2]" src="../assets/seat_off.png"/><img v-else src="../assets/seat_on.png"/></button><span>2</span></td>
    <th class="tg-0pky"> </th>
    <td class="tg-0pky"><button @click="click(3)"><img v-if="check[3]" src="../assets/seat_off.png"/><img v-else src="../assets/seat_on.png"/></button><span>3</span></td>
    <td class="tg-0pky"><button @click="click(4)"><img v-if="check[4]" src="../assets/seat_off.png"/><img v-else src="../assets/seat_on.png"/></button><span>4</span></td>
  </tr>
    <tr>
    <td class="tg-0pky"><button @click="click(5)"><img v-if="check[5]" src="../assets/seat_off.png"/><img v-else src="../assets/seat_on.png"/></button><span>5</span></td>
    <td class="tg-0pky"><button @click="click(6)"><img v-if="check[6]" src="../assets/seat_off.png"/><img v-else src="../assets/seat_on.png"/></button><span>6</span></td>
    <th class="tg-0pky"> </th>
    <td class="tg-0pky"><button @click="click(7)"><img v-if="check[7]" src="../assets/seat_off.png"/><img v-else src="../assets/seat_on.png"/></button><span>7</span></td>
    <td class="tg-0pky"><button @click="click(8)"><img v-if="check[8]" src="../assets/seat_off.png"/><img v-else src="../assets/seat_on.png"/></button><span>8</span></td>
  </tr>
  <tr>
    <td class="tg-0pky"><button @click="click(9)"><img v-if="check[9]" src="../assets/seat_off.png"/><img v-else src="../assets/seat_on.png"/></button><span>9</span></td>
    <td class="tg-0pky"><button @click="click(10)"><img v-if="check[10]" src="../assets/seat_off.png"/><img v-else src="../assets/seat_on.png"/></button><span>10</span></td>
    <th class="tg-0pky"> </th>
    <td class="tg-0pky"><button @click="click(11)"><img v-if="check[11]" src="../assets/seat_off.png"/><img v-else src="../assets/seat_on.png"/></button><span>11</span></td>
    <td class="tg-0pky"><button @click="click(12)"><img v-if="check[12]" src="../assets/seat_off.png"/><img v-else src="../assets/seat_on.png"/></button><span>12</span></td>
  </tr>
    <tr>
    <td class="tg-0pky"><button @click="click(13)"><img v-if="check[13]" src="../assets/seat_off.png"/><img v-else src="../assets/seat_on.png"/></button><span>13</span></td>
    <td class="tg-0pky"><button @click="click(14)"><img v-if="check[14]" src="../assets/seat_off.png"/><img v-else src="../assets/seat_on.png"/></button><span>14</span></td>
    <th class="tg-0pky"> </th>
    <td class="tg-0pky"><button @click="click(15)"><img v-if="check[15]" src="../assets/seat_off.png"/><img v-else src="../assets/seat_on.png"/></button><span>15</span></td>
    <td class="tg-0pky"><button @click="click(16)"><img v-if="check[16]" src="../assets/seat_off.png"/><img v-else src="../assets/seat_on.png"/></button><span>16</span></td>
  </tr>
    <tr>
    <td class="tg-0pky"><button @click="click(17)"><img v-if="check[17]" src="../assets/seat_off.png"/><img v-else src="../assets/seat_on.png"/></button><span>17</span></td>
    <td class="tg-0pky"><button @click="click(18)"><img v-if="check[18]" src="../assets/seat_off.png"/><img v-else src="../assets/seat_on.png"/></button><span>18</span></td>
    <th class="tg-0pky"> </th>
    <td class="tg-0pky"><button @click="click(19)"><img v-if="check[19]" src="../assets/seat_off.png"/><img v-else src="../assets/seat_on.png"/></button><span>19</span></td>
    <td class="tg-0pky"><button @click="click(20)"><img v-if="check[20]" src="../assets/seat_off.png"/><img v-else src="../assets/seat_on.png"/></button><span>20</span></td>
  </tr>
   <tr>
    <td class="tg-0pky"><button @click="click(21)"><img v-if="check[21]" src="../assets/seat_off.png"/><img v-else src="../assets/seat_on.png"/></button><span>21</span></td>
    <td class="tg-0pky"><button @click="click(22)"><img v-if="check[22]" src="../assets/seat_off.png"/><img v-else src="../assets/seat_on.png"/></button><span>22</span></td>
    <th class="tg-0pky"> </th>
    <td class="tg-0pky"><button @click="click(23)"><img v-if="check[23]" src="../assets/seat_off.png"/><img v-else src="../assets/seat_on.png"/></button><span>23</span></td>
    <td class="tg-0pky"><button @click="click(24)"><img v-if="check[24]" src="../assets/seat_off.png"/><img v-else src="../assets/seat_on.png"/></button><span>24</span></td>
  </tr>
   <tr>
    <td class="tg-0pky"><button @click="click(25)"><img v-if="check[25]" src="../assets/seat_off.png"/><img v-else src="../assets/seat_on.png"/></button><span>25</span></td>
    <td class="tg-0pky"><button @click="click(26)"><img v-if="check[26]" src="../assets/seat_off.png"/><img v-else src="../assets/seat_on.png"/></button><span>26</span></td>
    <th class="tg-0pky"> </th>
    <td class="tg-0pky"><button @click="click(27)"><img v-if="check[27]" src="../assets/seat_off.png"/><img v-else src="../assets/seat_on.png"/></button><span>27</span></td>
    <td class="tg-0pky"><button @click="click(28)"><img v-if="check[28]" src="../assets/seat_off.png"/><img v-else src="../assets/seat_on.png"/></button><span>28</span></td>
  </tr>
    <tr>
    <td class="tg-0pky"><button @click="click(29)"><img v-if="check[29]" src="../assets/seat_off.png"/><img v-else src="../assets/seat_on.png"/></button><span>29</span></td>
    <td class="tg-0pky"><button @click="click(30)"><img v-if="check[30]" src="../assets/seat_off.png"/><img v-else src="../assets/seat_on.png"/></button><span>30</span></td>
    <th class="tg-0pky"> </th>
    <td class="tg-0pky"><button @click="click(31)"><img v-if="check[31]" src="../assets/seat_off.png"/><img v-else src="../assets/seat_on.png"/></button><span>31</span></td>
    <td class="tg-0pky"><button @click="click(32)"><img v-if="check[31]" src="../assets/seat_off.png"/><img v-else src="../assets/seat_on.png"/></button><span>32</span></td>
  </tr>
</table>				
    </div>
</template>

<script>
    import router from '../router'
    export default {
        name: 'Bus',
        data () {
            return {
                destinaion:"",
                origin:"",
                time:"",
                tmp:"",
                pay:"",
                price:"",
                sum:0,
                check:[true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true],
                data:0,
                posts:[],
                sel:[],
            }
        },
        created() {        
                    this.origin = this.$route.query.origin;
                    this.tmp=this.$route.query.busId;
                    console.log(this.tmp);
                     const baseURI='http://localhost:8000';
                     this.$http.get(`${baseURI}/reservation/session`+`?BusId=`+this.tmp).
                     then((result)=>{
                     this.posts=result.data;
                     this.price=result.data.price;
					 console.log(this.posts);
                     console.log(this.price);
                     });
        },
        methods: {
                click(num){
                    console.log("click");
                    if(this.check[num]==true){ 
                        this.data+=1;
                        this.check[num]=false;
                        this.sum+=this.price;
                    }else{
                        this.check[num]=true;
                        this.data-=1;
                        this.sum-=this.price;
                    }
                }
        }
    }
</script>
<style>
.tg  {border-collapse:collapse;border-spacing:0;display: inline-block; border: 4px;}

</style>
