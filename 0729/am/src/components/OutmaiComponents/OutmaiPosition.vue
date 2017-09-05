<template>
  <div class="outmai-position">
    <header>
    		<p>
    			<span @click="showPosition" class="iconfont icon-qianjin-copy"></span>
    			选择地址
    		</p>
    		<input @keyup.enter="search" v-model="keyword" type="search" placeholder="请输入地址" autofocus="autofocus" class="search-inp">
    </header>
    <div class="info-box">
    	<ul>
    		<li @click="changePosition(a)" v-for="a in address">
    			<h4 v-text="a.name"></h4>
    			<p v-text="a.address"></p>
    		</li>
    	</ul>
    </div>
  </div>
</template>

<script>
import axios from  'axios'

import {mapState} from 'vuex'

export default {
  name: 'outmai-position',
  props:['showPosition'],
  data () {
    return {
      keyword:'',
      address:[]
    }
  },
  methods:{
  	search(){
  		
  		let that = this;
  		axios.get("https://mainsite-restapi.ele.me/bgs/poi/search_poi_nearby",{
  			params:{
  				keyword:this.keyword,
  				offset:0,
  				limit:20,
  				longitude:this.position.longitude,
  				latitude:this.position.latitude
  			}
  		}).then((res)=>{
  			that.address = res.data
  			console.log(that.address)
  		})
  	},
  	changePosition(a){
  		this.showPosition()
  		this.$store.commit("getPosition",{
  			latitude:a.latitude,
  			longitude:a.longitude,
  			address:a.name
  		})
  	}
  },
  computed:{
  	...mapState(['position'])
  },
  mounted(){
  	
  },
  updated(){
  },
  watch:{
  	
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>

@import '../../styles/_base.scss';

.outmai-position{
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;background: #f5f5f5;
	z-index: 9999;
	overflow: scroll;
	header{
		width: 100%;
    color: #fff;
    background-image: -webkit-linear-gradient(left,#0af,#0085ff);
    background-image: linear-gradient(90deg,#0af,#0085ff);
    text-align: center;
    padding-bottom: .32rem;
    p{
    	font-size: 0.5rem;
    	padding: 15px 0px;
    	position: relative;
    	span{
    		position: absolute;
    		left: 15px;
    		font-size: 0.7rem;
    		top: 12px;
    	}
    }
    .search-inp{
    	    margin-top: .133333rem;
		    width: 90%;
		    height: .733333rem;
		    line-height: .533333rem;
		    border-radius: .733333rem;
		    padding: 0 .48rem;
		    font-size: .346667rem;
		    border: none;
		    outline: none;
    }
	}
	.info-box li{
		padding: 10px;
		@include one-pixel;
		p{
			padding: 6px 0px;
		}
	}
}
	

</style>
