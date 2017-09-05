<template>
  <div class="outmai-header">
    <header>
    		<p class="info">
    			<span @click="showPosition" v-text="position?position.address:'获取位置中..'"></span>
    			<span class="weather">{{weather?weather.temperature:''}}°</span>
    		</p>
    		
    		<input type="text" placeholder="搜索商家、商品" aria-label="搜索商家、商品" class="search-inp">
    		
    		<div class="swiper-container header-nav">
    			<div class="swiper-wrapper">
    				<div class="swiper-slide" v-for="nav in navs" v-text="nav.word"></div>
    			</div>
    		</div>
    		
    </header>
  </div>
</template>

<script>
	import axios from  'axios'
export default {
  name: 'outmai-header',
  props:['position','showPosition'],
  swiper:null,
  data () {
    return {
     	weather:null,
     	navs:[]
    }
  },
  methods:{
  	getWeather(){
  		axios.get('https://mainsite-restapi.ele.me/bgs/weather/current',{
			  params:{
			    latitude:this.position.latitude,
			    longitude:this.position.longitude
			  }
			})
			.then(function(response){
			  this.weather = response.data
			}.bind(this))
  	},
  	getNavs(){
  		axios.get('https://mainsite-restapi.ele.me/shopping/v3/hot_search_words',{
			  params:{
			    latitude:this.position.latitude,
			    longitude:this.position.longitude
			  }
			})
			.then(function(response){
			  this.navs = response.data
			}.bind(this))
  	}
  },
  mounted(){
  	if(this.position&&this.position.latitude){
  			this.getWeather()
	  		this.getNavs()
  		}	 
  	this.$options.swiper=new Swiper(".header-nav",{
		  slidesPerView : 'auto'
  	})
  },
  updated(){
//	this.$options.swiper.update()
  },
  watch:{
  	navs(val){
  		let that = this
  		setTimeout(()=>{
  			that.$options.swiper.update()
  		},0) 		
  	},
  	position(val){
//		console.log(val,111)
  		if(val){
  			this.getWeather()
	  		this.getNavs()
  		}	  
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>

	header{
		    padding: .266667rem .373333rem;
	    background-image: -webkit-linear-gradient(left,#0af,#0085ff);
	    background-image: linear-gradient(90deg,#0af,#0085ff);
	    color: #fff;
	    height: 3.253333rem;
	    .info{
	    	display: flex;
	    	justify-content: space-between;
	    	font-size: 0.45rem;
	    	padding: 0.25rem 0;
	    }
	    .search-inp{
	    	display: block;
		    margin: .2rem 0;
		    width: 100%;
		    height: .96rem;
		    text-align: center;
		    border-radius: .96rem;
		    box-shadow: 0 0.026667rem 0.066667rem 0 rgba(0,0,0,.2);
		    color: #333;
		    font-size: .346667rem;
		    border: none;outline: none;
	    }
	    .swiper-slide{
	    	width: auto;
	    	padding: 0px 0.3rem;
	    	font-size: 0.2rem;
	    }
	}

</style>
