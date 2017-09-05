<template>
  <div class="outmai root-box">
  	
  	<div class="center">
  		<outmai-header :position="position" :showPosition="showPosition"></outmai-header>  	
	  	<outmai-banner :position="position"></outmai-banner>  	
	  	<outmai-list :position="position"></outmai-list>  
  	</div>
  		
  	
  	
  	<transition enter-active-class="animated fadeIn"  leave-active-class="animated fadeOut">
  		<outmai-position v-if="isShow" :showPosition="showPosition"></outmai-position>
  	</transition>  	
   
   <nav-tab></nav-tab>
   
  </div>
</template>

<script>
import {mapState,mapActions} from 'vuex'
import NavTab from './NavTab'
import OutmaiHeader from './OutmaiComponents/OutmaiHeader'
import OutmaiPosition from './OutmaiComponents/OutmaiPosition'
import OutmaiBanner from './OutmaiComponents/OutmaiBanner'
import OutmaiList from './OutmaiComponents/OutmaiList'
export default {
  name: 'outmai',
  data () {
    return {
    	isShow:false
    }
  },
  computed:{
  	...mapState(['position'])
  },
  methods:{
  	...mapActions(['getPosition']),
  	showPosition(){
  		this.isShow=!this.isShow
  	}
  },
  mounted(){
//	console.log(this.position)
  	if(!(this.position&&this.position.latitude)){
  		this.getPosition()
  	} 	
  },
  components:{
  	OutmaiHeader,
  	OutmaiPosition,
  	OutmaiBanner,
  	OutmaiList
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.center{
		width: 100%;
		height: 100%;
		position: relative;
		overflow: scroll;
	}
</style>
