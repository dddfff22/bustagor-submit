<template>
    <div >
      
                 <a style="cursor: pointer; text-decoration: underline" v-on:click="navigate()">경로 재선택</a>
              

<table cellspacing='0'> <!-- cellspacing='0' is important, must stay -->
	<thead color="success">
		<tr>
			<th><h1>{{ origin }}</h1></th>
			<th><h1>-></h1></th>
			<th><h1>{{destination}}</h1></th>
			<th><h1>{{date}}</h1></th>
			<th><h1>{{time}}이후</h1></th>	
		</tr>
	</thead><!-- Table Header -->
	<tbody>
      
	</tbody>
</table>

<table cellspacing='0'> <!-- cellspacing='0' is important, must stay -->
	<thead>
		<tr>
			<th>출발지</th>
			<th>도착지</th>
			<th>버스 등급</th>
			<th>출발 시간</th>
			<th>가격</th>	
		</tr>
	</thead><!-- Table Header -->
	<tbody>
        <tr v-for="post in posts">
			<td><h1>{{origin}}</h1></td>
			<td><h1>{{post.destination}}</h1></td>
			<td><h1>{{post.busType}}</h1></td>
			<td><h1>{{post.time}}시</h1></td>
			<td><h1>{{post.price}}</h1></td>
			<td><h1>{{post.busId}}</h1></td>
			<td><router-link :to="{name:'bus',query: {origin:origin, busId:post.busId}}"><v-btn color="success">좌석선택</v-btn></router-link></td>
		</tr>
	</tbody>
</table>
    </div>
   
</template>
<script>
    import router from '../router'
    export default {
        name: 'About',
        data () {
            return {
                destination:"",
                origin:"",
                time:"",
				date:"",
				busId:"",
                check: false,
				posts: [],
                 ok: 1,
                 type: 'A',
               loginType: 'username'
            }
        },created() {
                     this.destination = this.$route.query.destination;
                     this.origin = this.$route.query.origin;
                     this.time = this.$route.query.time;
                     this.date = this.$route.query.date;
                     const baseURI='http://localhost:8000';
                     this.$http.get(`${baseURI}/reservation/select`+`?origin=`+this.origin+`&destination=`+this.destination).
                     then((result)=>{
						 
					 this.posts=result.data;
					 console.log(this.posts);
                      this.ok=0;
                     console.log(11);
                });
        },
        methods: {
                navigate:function(){
                    router.go(-1);
                },change:function(){
                 
                        this.ok=0;
                },calcul:function(seat){
					console.log(seat);
					return 1;
				}
        }
    }
</script>
<style>
table, caption, tbody, tfoot, thead, tr, th, td {
	margin: 0;
	padding: 0;
	border: 0;
	outline: 0;
	font-size: 100%;
	vertical-align: baseline;
	background: transparent;
}
body { line-height: 1; }
ol, ul { list-style: none; }
blockquote, q { quotes: none; }
blockquote:before, blockquote:after, q:before, q:after { content: ''; content: none; }
:focus { outline: 0; }
del { text-decoration: line-through; }
table {border-spacing: 0; }
table a:link {
	color: #666;
	font-weight: bold;
	text-decoration: none;
}
table a:visited {
	color: #999999;
	font-weight: bold;
	text-decoration: none;
}
table a:active,
table a:hover {
	color: #bd5a35;
	text-decoration: underline;
}
table {
	font-family: Arial, Helvetica, sans-serif;
	color: #666;
	font-size: 12px;
	text-shadow: 1px 1px 0px #fff;
	background: #eaebec;
	
	margin: auto;
	border: #ccc 1px solid;
	
	-webkit-border-radius: 3px;
	border-radius: 3px;

	-webkit-box-shadow: 0 1px 2px #d1d1d1;
	box-shadow: 0 1px 2px #d1d1d1;
}
table > thead th {
	padding: 21px 25px 22px 25px;
	border-top: 1px solid #fafafa;
	border-bottom: 1px solid #e0e0e0;

	background: #ededed; /* Old browsers */
	background: -moz-linear-gradient(top,  #ededed 0%, #ebebeb 100%); /* FF3.6+ */
	background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#ededed), color-stop(100%,#ebebeb)); /* Chrome,Safari4+ */
	background: -webkit-linear-gradient(top,  #ededed 0%,#ebebeb 100%); /* Chrome10+,Safari5.1+ */
	background: -o-linear-gradient(top,  #ededed 0%,#ebebeb 100%); /* Opera 11.10+ */
	background: -ms-linear-gradient(top,  #ededed 0%,#ebebeb 100%); /* IE10+ */
	background: linear-gradient(to bottom,  #ededed 0%,#ebebeb 100%); /* W3C */
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ededed', endColorstr='#ebebeb',GradientType=0 ); /* IE6-9 */
}
table > thead th:first-child{
	text-align: left;
	padding-left: 20px;
}
table > thead > tr:first-child > th:first-child {
	-webkit-border-top-left-radius: 3px;
	border-top-left-radius: 3px;
}
table > thead > tr:first-child > th:last-child {
	-webkit-border-top-right-radius: 3px;
	border-top-right-radius: 3px;
}
table > tbody > tr {
	text-align: center;
	padding-left: 20px;
}
table > tbody > tr > td:first-child {
	text-align: left;
	padding-left: 20px;
	border-left: 0;
}
table > tbody > tr > td {
	padding:18px;
	border-top: 1px solid #ffffff;
	border-bottom: 1px solid #e0e0e0;
	border-left: 1px solid #e0e0e0;

	background: #fbfbfb; /* Old browsers */
	background: -moz-linear-gradient(top,  #fbfbfb 0%, #fafafa 100%); /* FF3.6+ */
	background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#fbfbfb), color-stop(100%,#fafafa)); /* Chrome,Safari4+ */
	background: -webkit-linear-gradient(top,  #fbfbfb 0%,#fafafa 100%); /* Chrome10+,Safari5.1+ */
	background: -o-linear-gradient(top,  #fbfbfb 0%,#fafafa 100%); /* Opera 11.10+ */
	background: -ms-linear-gradient(top,  #fbfbfb 0%,#fafafa 100%); /* IE10+ */
	background: linear-gradient(to bottom,  #fbfbfb 0%,#fafafa 100%); /* W3C */
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#fbfbfb', endColorstr='#fafafa',GradientType=0 ); /* IE6-9 */
}
table > tbody > tr:nth-child(even) > td{
	background: #f8f8f8; /* Old browsers */
	background: -moz-linear-gradient(top,  #f8f8f8 0%, #f6f6f6 100%); /* FF3.6+ */
	background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#f8f8f8), color-stop(100%,#f6f6f6)); /* Chrome,Safari4+ */
	background: -webkit-linear-gradient(top,  #f8f8f8 0%,#f6f6f6 100%); /* Chrome10+,Safari5.1+ */
	background: -o-linear-gradient(top,  #f8f8f8 0%,#f6f6f6 100%); /* Opera 11.10+ */
	background: -ms-linear-gradient(top,  #f8f8f8 0%,#f6f6f6 100%); /* IE10+ */
	background: linear-gradient(to bottom,  #f8f8f8 0%,#f6f6f6 100%); /* W3C */
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f8f8f8', endColorstr='#f6f6f6',GradientType=0 ); /* IE6-9 */
}
table > tbody > tr:last-child > td{
	border-bottom: 0;
}
table > tbody > tr:last-child > td:first-child {
	-webkit-border-bottom-left-radius: 3px;
	border-bottom-left-radius: 3px;
}
table > tbody > tr:last-child > td:last-child {
	-webkit-border-bottom-right-radius: 3px;
	border-bottom-right-radius: 3px;
}
table > tbody > tr:hover > td {
	background: #f2f2f2; /* Old browsers */
	background: -moz-linear-gradient(top,  #f2f2f2 0%, #f0f0f0 100%); /* FF3.6+ */
	background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#f2f2f2), color-stop(100%,#f0f0f0)); /* Chrome,Safari4+ */
	background: -webkit-linear-gradient(top,  #f2f2f2 0%,#f0f0f0 100%); /* Chrome10+,Safari5.1+ */
	background: -o-linear-gradient(top,  #f2f2f2 0%,#f0f0f0 100%); /* Opera 11.10+ */
	background: -ms-linear-gradient(top,  #f2f2f2 0%,#f0f0f0 100%); /* IE10+ */
	background: linear-gradient(to bottom,  #f2f2f2 0%,#f0f0f0 100%); /* W3C */
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f2f2f2', endColorstr='#f0f0f0',GradientType=0 ); /* IE6-9 */
}

</style>