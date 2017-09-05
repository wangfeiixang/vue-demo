<template>
  <div class="outmai-list">
    <ul
	  v-infinite-scroll="loadMore"
	  infinite-scroll-disabled="false"
	  infinite-scroll-distance="10">
	  <li v-for="item in slides">
	  	<h4 v-text="item.name"></h4>
	  	<p v-text="item.address"></p>
	  </li>
	</ul>
  </div>
</template>

<script>
	import axios from  'axios'
export default {
  name: 'outmai-banner',
  props:['position'],
  swiper:null,
  offset:0,
  data () {
    return {
      slides:[],
      notLoad:false
    }
  },
  methods:{
  	loadMore(){ 
  		
  		axios.get('https://mainsite-restapi.ele.me/shopping/restaurants?limit=20&extras[]=activities&terminal=h5',{
			  params:{
			    latitude:this.position.latitude,
			    longitude:this.position.longitude,
			    offset:this.$options.offset
			  }
			})
			.then(function(response){
				var data = response.data
				if(data.length==0){
					this.notLoad=true
				}
				
				console.log(response)
				let that = this;
				data.forEach((item,i)=>{
					that.slides.push(item)
				})
			  this.$options.offset+=20
			}.bind(this))
  	}
  },
  mounted(){
  	if(this.position&&this.position.latitude){
			  this.loadMore()
  		}	 
		
  },
  watch:{
  	position(val){
  		if(val){
				 this.loadMore()
  		}	  
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
	ul{
		padding-bottom: 60px;
	}
	li{
		padding: 15px 10px;
		p{
			padding: 8px;
		}
	}
	

</style>
