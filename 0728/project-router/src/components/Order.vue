<template>
  <div class="order  root-box">
   <div class="order-box">
   		<div class="order-header">
   			<h1>订单</h1>
   		</div>
   		<div class="order-body">
	   		<ul
			  v-infinite-scroll="loadMore"
			  infinite-scroll-disabled="loading"
			  infinite-scroll-distance="10">
			  <li v-for="item in list">{{ item }}</li>
			</ul>
		</div>
   </div>
   <nav-tab></nav-tab>
  </div>
</template>

<script>
import NavTab from './NavTab';
import axios from  'axios';
export default {
  name: 'order',
  data () {
    return {
     	list:[0,1,2]
    }
  },
  methods:{
	  	loadMore() {
		  this.loading = false;
		    let last = this.list[this.list.length - 1];
		    for (let i = 1; i <= 10; i++) {
		      this.list.push(last + i);
		    }
		}
  },
  mounted(){
  	this.loadMore()
  	console.log(1);
  	axios.get('https://m.mia.com/instant/seckill/seckillPromotionItem/43328')
  	.then((res)=>{
  		console.log(res.data)
  	})
  	.catch((res)=>{
  		console.log('错误')
  	})
  },
  watch:{
  	list(val){
  		console.log(val)
  		//this.loadMore()
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	.order-box{
	}
	.order-header{
		padding-top: 10px;
		display: flex;
		justify-content: center;
		align-items: center;
		h1{
			// margin-bottom: 5rem;
		}
	}
	.order-body{
		width: 100%;
		height:650px;
		position: relative;
		overflow: scroll;
	}
	ul{
		padding-bottom: 60px;
		li{
			width: 100%;
			padding:20px 0;
			text-align: center;
		}
	}

</style>
