<template>
  <div class="outmai-position">
    <header>
    		<p>
    			<span class="iconfont icon-qianjin-copy"></span>
    			选择地址
    		</p>
    		<input type="search" placeholder="请输入地址" autofocus="autofocus" class="search-inp">
    </header>
  </div>
</template>

<script>
import axios from  'axios'
export default {
  name: 'outmai-position',
  data () {
    return {
     
    }
  },
  methods:{
  	
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
.outmai-position{
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;background: #f5f5f5;
	z-index: 9999;
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
}
	

</style>
