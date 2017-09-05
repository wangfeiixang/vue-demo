<template>
  <div class="outmai-banner">
    <div class="swiper-container banner">
    	<div class="swiper-wrapper">
    		<div class="swiper-slide" v-for="slide in slides">
    			
    			<div class="slides" v-for="s in slide">
    				<img src="/static/slide.jpeg"/>
    				<span>{{s.name}}</span>
    			</div>

    		</div>
    	</div>
    	<div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
	import axios from  'axios'
export default {
  name: 'outmai-banner',
  props:['position'],
  swiper:null,
  data () {
    return {
      slides:[]
    }
  },
  methods:{
  	getSlides(){
  		axios.get('https://mainsite-restapi.ele.me/shopping/v2/entries?templates[]=main_template',{
			  params:{
			    latitude:this.position.latitude,
			    longitude:this.position.longitude
			  }
			})
			.then(function(response){
				var data = response.data[0].entries	
				for(var i =0;i<data.length;i++){
					if(i%8==0){
						//console.log(this.slides,11)
						this.slides.push([])
					}
				}
				
				for(var i =0;i<data.length;i++){
						this.slides[Math.floor(i/8)].push(data[i])
				}
//			  console.log(this.slides)
			  
			}.bind(this))
  	},
  },
  mounted(){
  	if(this.position&&this.position.latitude){
			  this.getSlides()
  		}	 
		this.$options.swiper=new Swiper(".outmai-banner .banner",{
			  pagination:'.swiper-pagination'
		})
  },
  watch:{
  	slides(val){
  		let that = this
  		setTimeout(()=>{
  			that.$options.swiper.update()
  		},0)
  	},
  	position(val){
  		if(val){
				 this.getSlides()
  		}	  
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>

	.swiper-slide{
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		.slides{
			width: 25%;
			display: flex;
			flex-flow: column;
			justify-content: space-between;
			align-items: center;
			padding:15px 0;
			img{
				width: 50%;
			}
			span{
				font-size: 0.2rem;
			}
		}
	}
	

</style>
