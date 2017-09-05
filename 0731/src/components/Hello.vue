<template>
  <div class="hello">
   	<my-button type="default">一个按钮</my-button>
   	<my-button type="primary" @click.native="handleclick">获取数据</my-button>
   	<my-loading :isShow="isShow"></my-loading>
   	
   	<ul>
   		<li v-for="food in foods">{{food}}</li>
   	</ul>
   	
  </div>
</template>

<script>
	
//	import {MyButton,MyLoading} from '../my-ui'
	
//	import MyButton from '../my-ui/button/Button'
//	import MyLoading from '../my-ui/loading/Loading'

		import Vue from 'vue'
//		import {MyButton,MyLoading} from '../my-ui'
//		
//		//use其实相当于调用组件的install方法-》全局注册
//		Vue.use(MyButton)
//		Vue.use(MyLoading)

  import {MyUI} from '../my-ui'
	
	Vue.use(MyUI)
	
export default {
  name: 'hello',
  data () {
    return {
      isShow:false,
      foods:[]
    }
  },
  methods:{
  	handleclick(){
  		this.isShow = true;
  		let that = this
  		setTimeout(()=>{
  			that.foods=['apple','banana','orange']
  			that.isShow = false;
  		},2000)
  	}
  },
//components:{
//	MyButton,
//	MyLoading
//}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
